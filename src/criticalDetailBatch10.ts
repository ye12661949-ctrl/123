import type { CriticalProject } from './criticalDetailBatch';
/** Liz Deschenes: Green Screen #6 and #7, checked 2026-10-10. */
export const criticalDetailBatch10: Record<string, Record<string, CriticalProject>> = {
  'liz-deschenes': {
    'Green Screen｜2001': {
      title: 'Green Screen #6 / #7｜技术背景真的进入图像了吗？',
      auditedOn: '2026-10-10',
      centralQuestion: '绿幕、工业色彩与摄影媒介是否可由作品本身辨认？',
      thesis: '#6保留FUJI NPS160边码与相邻帧，摄影取样的过程可见；#7几乎只剩绿色平面，脱离标题难以理解绿幕的影视用途。不能把拍摄绿幕误认为艺术家使用了数字抠像。',
      conceptChain: [
        '概念：原本用于替换背景的绿幕成为画面的全部。',
        '研究：真实绿幕、彩色胶片和摄影印相的工业条件。',
        '动作：拍摄绿色背景；#6保留连续帧与胶片边码；输出并装裱。',
        '图像结构：#6有双帧与边码；#7是一整块无标识绿面。',
        '观看：#6能看出摄影证据；#7接近抽象色场。'
      ],
      statementOff: '不看说明仍能识别#6的胶片边码，但#7无法独立证明与影视合成有关。',
      strongest: '#6保留胶片边码，让制作媒介成为可见形式。',
      weakest: '#7若孤立观看，很容易与一般绿色单色绘画混淆；数字抠像机制并未在作品中被实际演示。',
      judgment: '独立批评：同系列两件作品形成保留与删去媒介证据的对照。制作—形式链条成立，数字合成理论链条较弱。',
      versionNotes: [
        '#6画廊登记Fujiflex印相与Plexiglas，50.8×91.4厘米；#7 Whitney登记silver halide print与Plexiglas，125.9×167.6厘米。不得互相套用工艺。',
        '具体相机、镜头、暗房设备和软件未核实。'
      ],
      frames: [
        {
          title: '01｜Green Screen #6：两帧绿色与FUJI边码',
          imageUrl: 'https://duwuo5apsc5wb.cloudfront.net/uploads/files/_imageLightbox/Liz_Deschenes_artist_GreenScreen-6_2001_London_2.jpg?v=1702999909',
          sourceUrl: 'https://www.emanuelacampoli.com/exhibitions/chromatic-aberration-red-screen-green-screen-blue-screen-a-series-of-photographs-from-2001-to-2008',
          credit: 'Campoli Presti © Liz Deschenes',
          visible: '两块略有差异的绿色影像被黑色胶片边界隔开，顶部可见FUJI NPS160及帧编号。',
          interpretation: '【机构】画廊确认2001年Fujiflex印相；【独立研究】Vincent Bonnet讨论边码如何显露摄影的工业条件。',
          function: '使原本无内容的背景重新获得拍摄行为的物质证据。',
          transformation: '绿幕→连续拍摄→保留底片边码→双帧印相；技术背景成为作品对象。',
          withoutStatement: '可看出摄影胶片及重复取样，但无法从绿色场证明数字抠像过程。',
          relation: '与#7形成边码可见与被删去的对照。',
          necessity: '若换成任意绿色矩形，连续帧与胶片边码的证据会消失。',
          verdict: '独立批评：概念转译较强，但不能把作品写成软件合成实验。'
        },
        {
          title: '02｜Green Screen #7：没有边码的绿色平面',
          imageUrl: 'https://whitneymedia.org/assets/artwork/45788/2018_230_cropped.jpg',
          sourceUrl: 'https://whitney.org/collection/works/45788',
          credit: 'Whitney Museum © Liz Deschenes',
          visible: '灰背景前一块绿色矩形，内部略有色调变化，没有人物、道具或胶片边码。',
          interpretation: '【馆藏】Whitney登记为2001年银卤化物印相装Plexiglas；【本站】与影视绿幕的关联主要由标题与系列背景提供。',
          function: '测试摄影技术的背景被缩减为纯色后，还剩下多少可读信息。',
          transformation: '绿色背景→摄影输出→删除环境线索→近乎纯色的物理印相。',
          withoutStatement: '可见绿色色面，但无法识别其具体工业用途。',
          relation: '与#6相比，媒介标记减少，独立可读性随之下降。',
          necessity: '作为#6的对照不可替代；单独观看时却可能被任意绿色色块取代。',
          verdict: '独立批评：形式克制，但数字技术概念没有被独立可视化。'
        }
      ],
      sources: [
        {kind:'primary',label:'Campoli Presti Green Screen #6',url:'https://www.emanuelacampoli.com/exhibitions/chromatic-aberration-red-screen-green-screen-blue-screen-a-series-of-photographs-from-2001-to-2008',note:'作品图与输出规格。'},
        {kind:'institution',label:'Whitney Green Screen #7',url:'https://whitney.org/collection/works/45788',note:'独立馆藏工艺和尺寸。'},
        {kind:'independent',label:'Vincent Bonnet Green Screen论文',url:'https://turbulences-revue.univ-amu.fr/01-vincent-bonnet-ce-que-vous-ne-voyez-pas-est-lobjet-de-tout-ce-que-vous-voyez-propos-de-green-screen-process-de-liz-deschenes/',note:'独立学术分析，不是艺术家自述。'}
      ]
    }
  }
};
