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
      frames: [
        {
          title: '01｜Carretera de Fortuna, Murcia（艺术家原站）',
          imageUrl: 'https://freight.cargo.site/t/original/i/dfed59d515aa8e140345ac556a4091ca95862117fbaa78d018127d8e89e6df44/Carretera-de-Fortuna--Murcia--Spain.jpg',
          sourceUrl: 'https://mishkahenner.com/No-Man-s-Land',
          credit: '© Mishka Henner / 艺术家原站',
          visible: '蓝天、干燥丘陵和空旷公路占据画面，紫色上衣的背向人物站在路边。',
          interpretation: '艺术家自述：用自动街景摄影车的远程视线讨论观看和可见性。',
          function: '确立像路过车辆一样远远观察陌生人的基本视角。',
          transformation: '论坛地点线索→街景检索→选择人物与地景比例悬殊的画面。',
          withoutStatement: '看得见孤立和距离，看不出人物职业与论坛信息。',
          relation: '与02相比，此张更强调地景的空旷和人物的背向。',
          necessity: '公路弧线、背影和大片留白共同制造不接触的观看。',
          verdict: '形式转换强；身份判断缺乏图像证据。'
        },
        {
          title: '02｜护栏、塑料椅和人物（道路名待核）',
          imageUrl: 'https://static.designboom.com/weblog/images/images_2/erica/847/no08.jpg',
          sourceUrl: 'https://www.designboom.com/art/mishka-henner-no-mans-land/',
          credit: '© Mishka Henner / designboom 2011图版',
          visible: '护栏、白色塑料椅、交通标志、杂草和站立人物；斜射阳光形成长影。',
          interpretation: '艺术家整体论述将道路边缘与平台观察联系起来；无此人逐图访谈。',
          function: '通过椅子等临时物件把公共道路转成似乎可停留的空间。',
          transformation: '自动街景图像→艺术家选择物件与人同框→公共设施成为观看框架。',
          withoutStatement: '可读出有人暂时停留，不能确定等待的目的。',
          relation: '相较01，多了椅子和护栏这类具体物件。',
          necessity: '塑料椅与护栏是不可任意替代的空间线索。',
          verdict: '空间关系有效；将画面直接视为某种交易证据是推测。'
        }
      ],
      sources: [
        { kind: 'artist', label: '艺术家原站', url: 'https://mishkahenner.com/No-Man-s-Land', note: '项目方法与媒介规格。' },
        { kind: 'artist', label: '2012艺术家访谈', url: 'https://prisonphotography.org/2012/04/23/a-conversation-with-mishka-henner/', note: '艺术家回应伦理争议。' },
        { kind: 'independent', label: 'Kate Palmer Albers 2015', url: 'https://circulationexchange.org/articles/nomansland.html', note: '独立批评与图像分析。' }
      ]
    }
  }
};
