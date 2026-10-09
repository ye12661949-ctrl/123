import type { CriticalProject } from './criticalDetailBatch';
export const criticalDetailBatch3: Record<string, Record<string, CriticalProject>> = {
  'daisuke-yokota': {
    'Back Yard': {
      title:'Back Yard｜重复翻拍与记忆的视觉证据',
      auditedOn:'2026-10-09',
      centralQuestion:'重复翻拍是否真正使记忆的反复重构可见？',
      thesis:'物理复制导致的损耗可见，但最终单幅照片不能证明重复次数，也无法独立说明记忆。',
      conceptChain:['作者概念：回忆每次都会改变，借用音乐的延迟与回声。','研究：以已有照片为输入反复复制。','动作：数码照片打印、6×7胶片再摄影、改变冲洗温度和搅动；循环次数不固定。','图像：树木尚可辨认，颗粒与高反差侵蚀细节。','观看：可感到图像被反复损耗，却看不见每一轮的历史。'],
      statementOff:'没有说明仍能看到粗颗粒树林，却不能读出约十轮翻拍或作者的记忆理论。',
      strongest:'复制过程实际改变了照片的视觉信息，而非单纯加一个数字滤镜。',
      weakest:'没有前后版本对照时，损耗无法与一次性胶片缺陷或数字效果区分。',
      judgment:'独立判断：制作—形式强，记忆—观看较弱。要证明时间性，最好并置多代版本。',
      versionNotes:['具体图版的原始标题、翻拍轮次、药剂与输出尺寸未核实。','Canon 2021还谈到扫描损坏胶片与原图对齐，不能将全部工序简化为十次翻拍。'],
      frames:[{
        title:'01｜树林：仍可辨的景物与受损的表面',
        imageUrl:'https://petapixel.com/assets/uploads/2012/07/back2_mini.jpg',
        sourceUrl:'https://petapixel.com/2012/07/12/distorted-images-created-by-repeatedly-rephotographing-photos/',
        credit:'© Daisuke Yokota；2012转载，单张标题待核',
        visible:'树干、细枝与地面植物可辨；粗颗粒、强反差覆盖细节。',
        interpretation:'作者2012年访谈将反复复制类比为记忆回想与音乐回声，未见此张逐件说明。',
        function:'让原始景物与复制损耗在同一幅图里对抗。',
        transformation:'拍摄→打印→胶片翻拍与不规则冲洗→再次复制；最终呈现累积损耗。',
        withoutStatement:'可见异常颗粒，却不能确认轮次、技术或记忆指涉。',
        relation:'与Matter纸堆相比，这张仍保留外部景物。',
        necessity:'树木仍能辨认是关键；纯噪点图像无法展示信息被侵蚀。',
        verdict:'材料转换成立，哲学隐喻依赖作者解释。'
      }],
      sources:[
        {kind:'artist',label:'2012艺术家访谈',url:'https://www.popphoto.com/american-photo/shoot-print-repeat-interview-daisuke-yokota/',note:'具体翻拍流程与记忆/音乐比喻。'},
        {kind:'artist',label:'Canon 2021访谈',url:'https://global.canon/en/newcosmos/interview/daisuke-yokota/index.html',note:'补充胶片扫描与对齐等工序。'},
        {kind:'independent',label:'1000 Words评论',url:'https://1000wordsmag.com/daisuke-yokota/',note:'评论者的Provoke定位与作者陈述分开。'}
      ]
    }
  }
};