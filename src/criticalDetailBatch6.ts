import type { CriticalProject } from './criticalDetailBatch';
/** Thomas Demand, work-level critical study, 2026-10-10. */
export const criticalDetailBatch6: Record<string, Record<string, CriticalProject>> = {
  'thomas-demand': {
    'Control Room｜2011': {
      title: 'Control Room（2011）｜控制失效是否进入图像？',
      auditedOn: '2026-10-10',
      centralQuestion: '纸模型重建新闻图像，是否让灾难的失控真正可见？',
      thesis: '掉落的顶板与整齐仪表形成可见矛盾；但具体历史、技术和责任无法从照片独立辨认。',
      conceptChain: [
        '文字：作者在2012年Artforum文章谈到媒体传播与原始照片的差异。',
        '研究：从流通的控制室照片中选择异常垂落的顶板。',
        '动作：搭建等身纸卡模型，保留损坏、删去可读数据，重新摄影。',
        '结构：重复仪表、空白屏幕、垂落天花板；彩色显色印相约200×300厘米。',
        '观看：可见秩序与破坏并存，无法识别事故因果。'
      ],
      statementOff: '能看到受损控制室，不能读出具体地点或责任。',
      strongest: '顶板是从新闻原图选择的具体细节，确实进入了摄影构图。',
      weakest: '社会解释依赖外部文献；删掉信息也可能抹去事实。',
      judgment: '独立批评：制作到视觉的链条强，政治归责的可见证据弱。',
      versionNotes: ['作者关于媒体选图的说法未与全部原始照片独立比对。'],
      frames: [{
        title: '01｜控制室整幅',
        imageUrl: 'https://res.cloudinary.com/smimagebank/image/upload/w_2500%2Cc_limit%2Cfl_progressive/v1589278459/sprueth_magers_Thomas_Demand_Control_Room_2011_12469.jpg',
        sourceUrl: 'https://spruethmagers.com/exhibitions/thomas-demand-thomas-demand-berlin/',
        credit: '© Thomas Demand / Sprüth Magers',
        visible: '灰绿仪表台整齐排列，白色顶板垂落，室内无人。',
        interpretation: '作者强调顶板在新闻传播中被忽略。',
        function: '用秩序与损坏的并置表现控制失效。',
        transformation: '媒体照片→纸模型→摄影；保留顶板，删去数据。',
        withoutStatement: '能读到异常，无法知道事故地点。',
        relation: '与模型细部及Poll的空白纸张策略对照。',
        necessity: '替换成完好机房会丢失顶板这一关键冲突。',
        verdict: '形式成立，历史因果需要外部证据。'
      }],
      sources: [
        {kind:'artist',label:'Demand：Media Study',url:'https://thomasdemand.net/media/pages/selected-work/kontrollraum-controlroom/193a5d7634-1662752559/artforum_vol_51_no_1_september_2012_p_228.pdf',note:'作者第一人称解释。'},
        {kind:'institution',label:'MFAH馆藏',url:'https://emuseum.mfah.org/objects/129930/control-room',note:'馆藏尺寸与原型。'}
      ]
    }
  }
};
