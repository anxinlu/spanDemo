import { computed, defineComponent, onMounted, ref } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
  name: 'spanCmp',
  setup(props, ctx) {
    const renderSpan = computed(() =>
      new Array(10).fill(Math.random() * 100).map((index) => (
        <span contenteditable="false" style={{ outline: 'none' }}>
          span{index}
        </span>
      ))
    )

    const cRef = ref<HTMLDivElement>()

    const dragOver = (e: Event & { dataTransfer: any; currentTarget: any }) => {
      const target = e.target as HTMLElement
      let data = {
        id: e.currentTarget!.dataset.id, //获取自定义属性id
        src: e.currentTarget!.src
      }
      //设置数据类型为（“Text”）并以json串的数据形式传递
      e.dataTransfer.setData('Text', JSON.stringify(data))

      if (target.nodeName !== 'SPAN') {
        return
      }
      target.setAttribute('contenteditable', 'true')
    }

    const dragLeave = (e: Event) => {
      console.log('dragLeave', e.target)
      const target = e.target as HTMLElement
      if (target.nodeName !== 'SPAN') {
        return
      }
      target.setAttribute('contenteditable', 'false')
    }

    const drop = (e: Event & { dataTransfer: any; currentTarget: any }) => {
      console.log('drop', e)
      const target = e.target as HTMLElement
      if (target.nodeName !== 'SPAN') {
        return
      }

      // var selection=window.getSelection()
      // var range=selection?.getRangeAt(10)

      // console.log('e.dataTransfer',e.dataTransfer.getData('Text'));
      // const origin = target.innerHTML
      // target.innerHTML = `${origin}${e.dataTransfer.getData('Text')}aaaaaaa`

      // target.setAttribute('contenteditable','false')
    }

    const dragEnd = (e: Event) => {
      console.log('dragEnd', e.target)
      const target = e.target as HTMLElement
      if (target.nodeName !== 'SPAN') {
        return
      }
      target.setAttribute('contenteditable', 'false')
    }

    // observer 观察者
    // 事件处理器
    function callback(mutationRecords: any, observer: any) {
      mutationRecords.forEach((mutationRecord: any) => {
        //  console.dir(mutationRecord)
        //  if(mutationRecord.type === "attributes") return console.log('属性发生了变化 target =', mutationRecord.target)
        //  if(mutationRecord.type === 'childList') return console.log('添加or删除了 childList: ',mutationRecord.target)
        if (mutationRecord.type === 'characterData')
          return console.log('文本节点的数据发生了变化', mutationRecord)
      })
    }
    // 创建一个观察者

    onMounted(() => {
      console.log(cRef.value)
      const observer = new MutationObserver(callback)

      observer.observe(cRef.value!, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      })
    })

    const startDrag = (e: DragEvent) => {
      // let data={
      //     id:e.currentTarget!.dataset.id,    //获取自定义属性id
      //     src:e.currentTarget!.src
      // }
      // //设置数据类型为（“Text”）并以json串的数据形式传递
      // e.dataTransfer!.setData("Text",JSON.stringify(data));
    }

    return {
      renderSpan,
      startDrag,
      cRef,
      dragOver,
      dragLeave,
      dragEnd,
      drop
    }
  },
  render() {
    return (
      <>
        <h3 onDragstart={(event: DragEvent) => this.startDrag(event)}>测试文案</h3>
        <div
          contenteditable="true"
          ref="cRef"
          id="test"
          onDragover={(event: Event & { dataTransfer: any; currentTarget: any }) =>
            this.dragOver(event)
          }
          onDragleave={(event: Event) => this.dragLeave(event)}
          onDragend={(event: Event) => this.dragEnd(event)}
          onDrop={(event: Event & { dataTransfer: any; currentTarget: any }) => this.drop(event)}
          class={styles.content}
          onBlur={() => {
            console.log('失去焦点')
          }}
        >
          {this.renderSpan}
        </div>
      </>
    )
  }
})
