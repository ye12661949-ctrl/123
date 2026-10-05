import type { ArtistArchive } from './archiveData';

export const archiveExtensions337: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'richard-mosse': {
    projectCoverage: '深化特殊成像技术、观看伦理与机构网络：从红外战争摄影，经军用热成像迁徙影像，推进到 Amazon 多光谱/GIS 环境影像。',
    imageCoverage: '项目资料优先绑定艺术家官网、NGV、Barbican 等可追溯机构来源；不以无来源网络图填充。',
    note: 'Mosse 最重要的连续性不是“把灾难拍得漂亮”，而是主动选择带有既定权力用途的成像系统，再把这种技术的观看逻辑暴露出来：Kodak Aerochrome 曾服务侦察；Incoming 的军用热成像本用于远距离侦测/目标识别；Broken Spectre 的多光谱系统模拟卫星遥感。媒介因此不是中性的形式效果，而是作品政治结构的一部分。与传统冲突摄影相比，他不断让“相机怎样看”与“我们怎样看危机”成为同一个问题；与此同时，作品也保留一个必须持续批评的矛盾：技术转换产生强烈视觉吸引力，可能既揭露暴力，也重新审美化暴力。',
    projects: [
      {
        title: 'Incoming / Heat Maps',
        cluster: 'Military thermal imaging / migration / surveillance',
        period: '2014–2017',
        summary: 'Mosse 与摄影指导 Trevor Tweeten、作曲 Ben Frost 合作，把出口受管制的军用长距离热成像系统转向欧洲、中东和北非迁徙路线。Barbican 记录该设备可在超过30公里距离探测人体热迹，并以三通道装置展示。与录像并行的 Heat Maps 则把相机装上机器人运动控制云台，以近千个小画面扫描、拼接难民营，形成超高细节热成像全景。这里的关键不是简单“用热成像拍难民”，而是把原本用于监视、追踪和目标识别的机器观看机制反转成被观看对象本身。',
        actions: ['取得并测试军用长距离热成像设备','沿迁徙路线与难民营进行长期拍摄','以60fps拍摄后降至24fps形成缓慢观看','把热成像相机安装在机器人运动控制云台','以近千帧拼接 Heat Maps 全景','制作三通道大型投影','与Ben Frost的定向现场录音和合成声音共同构成沉浸环境'],
        sourceUrl: 'https://www.barbican.org.uk/read-watch-listen/barbican-meets-richard-mosse',
        images: [],
        relations: [
          { kind: '展览', label: 'Barbican — Incoming', detail: 'The Curve, London, 15 Feb–23 Apr 2017' },
          { kind: '策展', label: 'Alona Pardo / Barbican', detail: 'Barbican commission and institutional presentation context' }
        ]
      },
      {
        title: 'Broken Spectre',
        cluster: 'Amazon / multispectral imaging / GIS / environmental crisis',
        period: '2018–2022',
        summary: '历时三年在 Amazon Basin 多地拍摄的74分钟沉浸式影像，把环境危机拆成不同尺度和不同波段：航空多光谱遥感呈现大面积毁林组织结构，红外和其他实验摄影进入燃烧、采矿、农业和原住民抗争现场，微观影像则指向生态系统内部的非人生命。NGV 记录 Mosse 与机器视觉光谱工程师共同开发多传感器相机：通过分光器捕捉狭窄波段的光谱反射，并以 GIS 方式把环境变化转译为颜色。因此“尺度太大/太小而看不见”并非 statement 中的比喻，而是直接决定了相机、波段、航空平台、画幅和安装方式。',
        actions: ['在Amazon Basin持续三年田野拍摄','与机器视觉光谱工程师开发定制多光谱相机','将多传感器阵列安装到飞机机头进行航空拍摄','使用分光器记录狭窄光谱波段','以GIS逻辑把生态信息转译成颜色','结合红外、微观与常规电影摄影','剪辑为74分钟影像','以约20米宽沉浸式全景呈现不同尺度'],
        sourceUrl: 'https://www.ngv.vic.gov.au/exhibition/richard-mosse-broken-spectre/',
        images: [],
        relations: [
          { kind: '展览', label: 'National Gallery of Victoria — Broken Spectre', detail: 'World premiere, 2022–2023' },
          { kind: '收藏', label: 'National Gallery of Victoria', detail: 'Broken Spectre, 74 min 12 sec; co-commissioned by NGV, VIA Art Fund, Westridge Foundation and Serpentine Galleries' }
        ]
      }
    ],
    awards: ['Deutsche Börse Photography Prize, 2014', 'Prix Pictet, 2017', 'Arts at CERN residency, 2022'],
    exhibitions: ['Ireland Pavilion, 55th Venice Biennale — The Enclave, 2013', 'Barbican, London — Incoming, 2017', 'National Gallery of Victoria — Broken Spectre, 2022–2023', 'Kunsthalle Bremen survey, 2022', 'MAST Foundation, Bologna survey, 2021'],
    sources: [
      { label: 'Richard Mosse — Broken Spectre official project', url: 'https://www.richardmosse.com/' },
      { label: 'NGV — Richard Mosse: Broken Spectre', url: 'https://www.ngv.vic.gov.au/exhibition/richard-mosse-broken-spectre/' },
      { label: 'NGV Collection — Broken Spectre', url: 'https://www.ngv.vic.gov.au/explore/collection/work/149921/' },
      { label: 'Barbican — Incoming', url: 'https://www.barbican.org.uk/whats-on/2017/event/richard-mosse-incoming' },
      { label: 'Barbican Meets Richard Mosse', url: 'https://www.barbican.org.uk/read-watch-listen/barbican-meets-richard-mosse' }
    ]
  }
};
