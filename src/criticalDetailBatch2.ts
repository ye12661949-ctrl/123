import type { CriticalProject } from './criticalDetailBatch';
export const criticalDetailBatch2: Record<string, Record<string, CriticalProject>> = {
  'mishka-henner': {
    'No Man’s Land': {
      title: 'No Man’s Land｜远程观看的伦理与图像形式',
      auditedOn: '2026-10-08',
      centralQuestion: '作品批评远程凝视，却是否也复制了这种凝视？',
      thesis: '论坛地理线索、街景检索、截帧与再出版是真实制作链；远距视角确实进入图像，但人物身份不能仅由画面证明。',
      conceptChain: ['地点论坛→Google Street View检索→截取道路画面→编辑出版。','道路相机决定视点和偶然模糊；艺术家决定选图与排序。','观众看见远处人物，但无法核验身份、同意或具体经历。'],
      statementOff: '道路、距离与陌生人仍可见；论坛、经济关系和个人身份无法独立读出。',
      strongest: '平台本身生成的视觉条件成为作品材料，不是模拟监视美学。',
      weakest: '批评窥视的同时再传播陌生人的图像，未解决其同意问题。',
      judgment: '独立判断：媒介转换强，个人社会身份的证据弱；作品价值与伦理缺口同源。',
      versionNotes: ['2011–2013包含书籍、印刷、视频与音频不同版本。','逐图原始街景日期、个人身份和论坛原帖未核实。'],
      frames: [],
      sources: [
        { kind: 'artist', label: '艺术家原站', url: 'https://mishkahenner.com/No-Man-s-Land', note: '项目方法与媒介规格。' },
        { kind: 'artist', label: '2012艺术家访谈', url: 'https://prisonphotography.org/2012/04/23/a-conversation-with-mishka-henner/', note: '艺术家回应伦理争议。' },
        { kind: 'independent', label: 'Kate Palmer Albers 2015', url: 'https://circulationexchange.org/articles/nomansland.html', note: '独立批评与图像分析。' }
      ]
    }
  }
};
