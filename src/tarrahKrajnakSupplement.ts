import { artists } from './data';
import { artistArchives, type ArtistArchive, type ArchiveProject } from './archiveData';

const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').toLowerCase();
const artist = artists.find(item => normalize(item.name) === normalize('Tarrah Krajnak'));

if (artist) {
  artist.born = '1979 · Lima, Peru';
  artist.base = 'Los Angeles / Berlin (2025–2026 research fellowship)';
  artist.intro = '在摄影、现场表演、暗房劳动、写作与诗歌之间工作。她经常把自己的身体重新放入摄影史、家庭史和政治档案之中，通过重演、遮蔽、重拍、现场显影、身体痕迹和档案再编排，质疑摄影经典中的作者权、女性身体、族裔身份以及“谁有资格进入历史”。';
  artist.methods = ['表演摄影', '自画像', '暗房现场', '再摄影', '档案介入', '重演', '银盐摄影', '大画幅摄影', '青版', '太阳化', '拼贴 / Xerox', '诗歌与写作', '身体动作', '装置'];
  artist.subjects = ['摄影史', '女性身体', '作者权', '秘鲁与跨国收养', '记忆与档案', '身份与归属', '殖民 / 现代主义经典', '政治暴力', '身体与姿态', '生态与土地', '母女 / 姐妹关系'];
  artist.outputs = ['银盐照片', '现场表演', '录像', '摄影书', '青版', '装置', '诗歌', '改造书籍', '摄影档案'];
  artist.institutions = Array.from(new Set([
    ...artist.institutions,
    'Museum of Modern Art (MoMA)',
    'Tate Modern',
    'Victoria and Albert Museum (V&A)',
    'Centre Pompidou',
    'Pinault Collection',
    'Museum Ludwig',
    'Museum Brandhorst',
    'Huis Marseille Museum for Photography',
    'Museum of Contemporary Photography Chicago',
    'The Photographers’ Gallery',
    'International Center of Photography (ICP)',
    'Les Rencontres d’Arles',
    'Frye Art Museum',
    'Fondation Henri Cartier-Bresson',
    'Fondation A Stichting'
  ]));
  artist.achievements = Array.from(new Set([
    ...artist.achievements,
    'ICP Infinity Award 2026 · Photographic Art and New Media',
    'Henri Cartier-Bresson Creation Award 2025 · Dislocations',
    'Deutsche Börse Photography Foundation Prize 2025 · shortlisted',
    'Guggenheim Fellowship 2024',
    'Louis Roederer Discovery Award 2021 · Jury Award · Master Rituals II: Weston’s Nudes',
    'Hariban Award 2021 · Grand Prize / Benrido collotype residency',
    'Dorothea Lange–Paul Taylor Prize 2020 · El Jardín de Senderos Que Se Bifurcan',
    'Howard Foundation Fellowship 2022',
    'Lewis Baltz Research Fund Award 2021'
  ]));
  artist.whyImportant = '她最值得研究的不是“复古黑白”外观，而是她把摄影史中的既有图像、身体姿势和权力关系重新变成一个可执行的动作系统：找原图或档案 → 用自己的身体进入 → 现场拍摄 / 显影 / 遮挡 / 重拍 → 保留身体和劳动痕迹 → 再把新图像与原图、文本和装置并置。这样摄影史不再只是被引用，而是被她实际重新表演和改写。';
  artist.projects = [
    {
      year: '2005 / printed 2023',
      title: 'Pose Archive',
      type: '早期自画像档案 / 6×6 胶片 / 银盐印相',
      facts: [
        '2005 年使用 6×6 Hasselblad 拍摄 18 张自画像。',
        '这些底片直到 2023 年才第一次在她自己的暗房中完整印出。',
        '统一使用 16×20 英寸 Ilford 光面银盐纸。',
        '该组被设计成与后来的 RePose 紧邻展示，把相隔近 20 年的身体姿态连接起来。'
      ],
      reading: '它像一个早期“身体姿态数据库”，后来 RePose 把同一个问题发展成公开表演和庞大的历史图像采样。'
    },
    {
      year: '2014',
      title: '1979 / Sismos79',
      type: '反档案静物 / 拼贴 / 重构历史材料',
      facts: [
        '在秘鲁利马收集与自己出生年份 1979 有关的政治杂志、色情杂志和其他旧印刷物。',
        '把旧杂志、找到的玻璃和镜子搭成临时静物雕塑。',
        '再把这些临时结构摄影，形成高反差、破碎、抽象化的图像。',
        '她把这一方法称为 counter-archival：不是复原一个完整档案，而是制造一个破裂、矛盾的历史图谱。'
      ],
      reading: '她没有把 1979 年资料平整地扫描归档，而是故意让材料通过玻璃、反射、遮挡和重新摄影变形。'
    },
    {
      year: '2014–present',
      title: 'Time Twins',
      type: '肖像 / 声音 / 诗歌',
      facts: [
        '在利马发布广告，寻找同样出生于 1979 年的女性。',
        '由被摄者自己选择典型利马街头地点，很多肖像在夜间摆拍完成。',
        '录下每位女性讲述自己在利马成长的个人记忆。',
        '把录音转写和改造成实验诗，再由 Krajnak 自己朗读并与照片一起播放。'
      ],
      reading: '她把“如果我没有被跨国收养，我可能成为谁”拆成一组现实存在的同龄女性，而不是用虚构替身。'
    },
    {
      year: '2011–2021',
      title: 'El Jardín de Senderos Que Se Bifurcan',
      type: '长期自传性档案 / 摄影 / 文本 / 装置',
      facts: [
        '把利马、收养史、找到的照片、重访地点、自画像和家庭材料长期组合。',
        '使用银盐、pigment print、Xerox、墙纸式大幅输出以及 found photographs 等多种形式。',
        'Time Twins、1979 等不同分支都进入这个更大的长期项目。',
        '2020 年获得 Dorothea Lange–Paul Taylor Prize，2021 年出版同名摄影书。',
        'MoMA 后来收藏该项目 27 张作品。'
      ],
      reading: '它不是一条线性自传，而是把“出生、被收养、返回、想象中的另一种人生”组织成不断分叉的图像路径。'
    },
    {
      year: '2018',
      title: 'Master Rituals I: Ansel Adams',
      type: '摄影史介入 / 表演 / 改造书籍 / 再摄影 / 视频',
      facts: [
        '以 Ansel Adams 的《Examples: The Making of 40 Photographs》作为原始材料。',
        '把自己的摄影档案覆盖到 Adams 的图像与文字上。',
        '使用自己的手、头发和身体遮挡 / 删除 Adams 的文字。',
        '部分动作使用咖啡、头发等材料直接作用于打印物。',
        '同时录制她遮挡、擦除和重新拍摄这些图像的过程。',
        '最终作品包括视频、表演记录、诗歌、原始照片、再摄影与 altered book。'
      ],
      reading: '这里“批评大师”不是写一篇理论文字，而是直接拿他的经典教材做物质操作，让自己的身体成为删改工具。'
    },
    {
      year: '2019',
      title: '1979: Contact Negatives',
      type: '持续时间表演 / 大画幅自画像 / 临时暗房',
      facts: [
        '在洛杉矶 as-is gallery 进行现场表演，并搭建临时暗房。',
        '使用两台 8×10 相机、投影、再摄影和现场冲洗。',
        '把 1979 年利马的历史图像投影到自己的身体和现场，再把自己重新“放回”出生年份与出生城市。',
        '在表演中完成 18 张大画幅负片，并制作 18 张 cyanotype。',
        '作品强调暗房本身就是表演地点，而不是幕后制作空间。'
      ],
      reading: '这组最关键的不是“把旧照片投到身体上”，而是她同时控制相机、身体、投影、冲洗与印相，把整个摄影生产链公开化。'
    },
    {
      year: '2020',
      title: 'Master Rituals II: Weston’s Nudes',
      type: '重演 / 自画像 / 摄影史反写',
      facts: [
        '重新表演 Edward Weston 为 Bertha Wardell、Charis Wilson 等女性拍摄的裸体姿势。',
        'Krajnak 同时作为摄影者和被摄者出现，并在画面中保留快门线。',
        '她不完全复制 Weston 的裁切，而是让自己的身体越出原来被截断的范围。',
        '部分图像加入测光表、防毒面具或直接凝视镜头等动作。',
        '通过控制拍摄和姿势，把原来由男性摄影师主导的裸体经典变成女性主体自行重演的图像。',
        '2021 年获 Les Rencontres d’Arles Louis Roederer Discovery Award Jury Prize，2022 年出版摄影书。'
      ],
      reading: '成立点在“同一姿势由谁执行、谁控制快门”。她不是简单 cosplay Weston，而是把拍摄权从原摄影师手里拿回来。'
    },
    {
      year: '2020–2022',
      title: 'Ayni (Offerings for my Sister)',
      type: '持续时间表演 / 青版 / 身体痕迹 / 祭献结构',
      facts: [
        '以长时间身体动作和太阳曝光制作青版。',
        '作品以 For Ana、For Agnes、For Sierra Madre 等名字形成“献给某人 / 某物”的结构。',
        '部分作品把身体在长时间站立或动作中留下的痕迹与纸面曝光结合。',
        '最终形成大型 Arches 纸青版、银盐照片与表演录像。'
      ],
      reading: '她把摄影曝光从“瞬间按快门”变成身体和日光共同持续作用的时间过程。'
    },
    {
      year: '2020–2022',
      title: 'Automatic Rocks / Excavation / Dark Constellations',
      type: '生态诗学 / 岩石 / 太阳化银盐 / 双联画',
      facts: [
        '围绕岩石、土地、身体和自动写作发展图像与诗歌。',
        '把岩石照片与具有身体、伤害、记忆意味的标题配成双联关系。',
        '制作一组独一版 solarized silver gelatin prints，形成 Dark Constellations 网格。',
        '与 Ayni 一起组成 2023 个展 Rock, Paper, Sun。'
      ],
      reading: '这条线把她早期的人类历史档案方法转向非人对象：岩石也被当成能够承载记忆和身体经验的“档案”。'
    },
    {
      year: '2021–2023',
      title: 'Forestpath',
      type: '场域摄影 / 1:1 再摄影 / 表演',
      facts: [
        '受 Victor Burgin 1967 年 Photopath 启发。',
        '在加州 Big Sur 的 Landels Hill-Big Creek Reserve 拍摄火灾后的森林地面。',
        '把地面照片按 1:1 比例印成 27 张银盐照片，再带回原地点直接铺在地面上。',
        '重新拍摄“照片覆盖原地面”的状态。',
        '后来又在工作室 / 展场里踩踏这些照片，同时朗读经她删改的 Ansel Adams 1978 年演讲。'
      ],
      reading: '它把“照片复制现实”做成字面动作：打印物真的覆盖在原物上，再用身体踩过去，使复制、原物与表演发生冲突。'
    },
    {
      year: '2022–present',
      title: 'RePose',
      type: '现场摄影表演 / 姿态档案 / 即时暗房',
      facts: [
        '在展场搭建摄影棚和暗房，同时铺设数百张“女性姿势”Xerox 图像。',
        '姿势来源横跨时尚、色情杂志、艺术史书、艺术家专著、博物馆图录和人类学研究。',
        '现场从这些图像中选择姿势，用自己的身体重新摆拍。',
        '每天结束后当场冲洗胶卷并制作银盐照片。',
        '把新自拍与对应的原始姿势图紧邻挂出。',
        '最终形成可独立展示的约 60 张银盐自画像 portfolio，也可以重新进行现场表演。'
      ],
      reading: '这是她方法最清楚的一组：先建立姿态数据库，再逐一用身体“重演”，最后在现场把原图与新图像并排。'
    },
    {
      year: '2024–2025',
      title: 'Body Configurations (Lima)',
      type: '城市身体 / 自画像 / 银盐',
      facts: [
        '在利马城市空间和具体建筑 / 结构中重新摆放自己的身体。',
        '把身体与台阶、墙面、几何构筑物、公共空间关系化。',
        '以黑白银盐摄影形成新的身体—城市配置。',
        '2025 年在 Frye Art Museum 的 Boren Banner Series 中放大为 16×20 英尺户外 banner，并在馆内展示相关作品。'
      ],
      reading: '这里身体不再主要进入旧照片，而是直接进入现实城市结构，姿态本身成为测量和改写空间的工具。'
    },
    {
      year: '2025',
      title: 'Crowds',
      type: '8×10 现场表演 / 群体姿态重演 / 暗房',
      facts: [
        '在 ICP 现场进行表演，以 1979 年利马及拉丁美洲政治群众图像为视觉起点。',
        '使用 8×10 胶片拍摄身体姿态。',
        '负片在 ICP 现场显影并 contact print，之后回洛杉矶暗房放大。',
        '最终形成 9 张 40×50 英寸银盐作品。',
        '图像包括举臂、排队、牵手、休息、革命姿态等“群体身体语法”。'
      ],
      reading: '她把群众运动的政治姿态压缩到单个或少数身体中，让“人群”成为可被重新排练的动作档案。'
    },
    {
      year: '2025–2027',
      title: 'Dislocations (working title)',
      type: 'HCB Creation Award 项目 / 场所重访 / 身体介入',
      facts: [
        '重访 Lewis Baltz 1974 年《The New Industrial Parks near Irvine, California》中的具体工业地点。',
        '重新寻找今天仍存在或已发生变化的工业建筑和周边空间。',
        '把自己的身体置入这些原本高度冷静、无人化的工业景观中。',
        '借工业地点连接现代主义摄影史、移民身份与当下针对边缘群体的政治暴力。',
        '项目获 2025 Henri Cartier-Bresson Creation Award，将于 2027 在 Fondation HCB 展出并出版。'
      ],
      reading: '这组像是她对 Baltz 的一次“身体化反写”：保留工业景观的地点，但把被原作删除的人重新放回画面。'
    }
  ];
  artist.sourceLabel = 'Tarrah Krajnak · official website';
  artist.sourceUrl = 'https://www.tarrahkrajnak.com/';

  const existing = artistArchives[artist.id] as ArtistArchive | undefined;
  const archive: ArtistArchive = existing ?? {
    artistId: artist.id,
    projectCoverage: '', imageCoverage: '', note: '', projects: [], awards: [], exhibitions: [], sources: []
  };

  const detailedProjects: ArchiveProject[] = [
    {
      title: 'Pose Archive', cluster: 'Body / pose / self-portrait', period: '2005 / printed 2023',
      summary: '18 张早期 6×6 自画像；2023 年首次完整暗房印制，并被放在 RePose 旁形成跨越近二十年的身体姿态对照。',
      actions: ['使用 6×6 Hasselblad 自拍', '保存未印底片近二十年', '2023 年自行暗房印制 16×20 Ilford 银盐照片', '与 RePose 并置展出'],
      sourceUrl: 'https://www.tarrahkrajnak.com/pose-archive', images: [], relations: []
    },
    {
      title: '1979 / Sismos79', cluster: 'Counter-archive / Lima / adoption', period: '2014',
      summary: '把 1979 年利马政治 / 色情杂志、玻璃、镜子和旧档案材料搭成临时静物后重新摄影，以破裂和反射制造“反档案”。',
      actions: ['在利马收集 1979 年旧杂志', '收集玻璃与镜子', '搭建临时静物雕塑', '利用反射和遮挡破坏档案可读性', '重新摄影形成 pigment prints'],
      sourceUrl: 'https://tarrahkrajnak.com/project-archive/sismos79/1979-', images: [], relations: []
    },
    {
      title: 'Time Twins', cluster: 'Adoption / alternate lives / Lima', period: '2014–present',
      summary: '寻找同为 1979 年出生于利马的女性，以摆拍肖像、口述记忆和艺术家重新朗读的实验诗建立“另一种可能人生”的平行档案。',
      actions: ['在利马发布招募广告', '寻找 1979 年出生女性', '让被摄者自行选择城市地点', '多在夜间进行摆拍', '录音个人成长记忆', '把口述材料改写为实验诗', '由艺术家重新朗读并与照片播放'],
      sourceUrl: 'https://www.tarrahkrajnak.com/project-archive/sismos79/time-twins', images: [], relations: []
    },
    {
      title: 'El Jardín de Senderos Que Se Bifurcan', cluster: 'Adoption / autobiography / archive', period: '2011–2021',
      summary: '长期项目把出生于利马、跨国收养、返回、找到的家庭 / 城市材料和自画像组织为非线性自传。',
      actions: ['重访利马', '收集 found photographs 与印刷材料', '制作自画像与再摄影', '使用 Xerox / 银盐 / pigment / 墙纸输出', '把多个子系列编入同一长期项目', '2021 出版同名摄影书'],
      sourceUrl: 'https://www.tarrahkrajnak.com/el-jard-n-de-senderos-que-se-bifurcan-', images: [],
      relations: [
        { kind: '奖项', label: 'Dorothea Lange–Paul Taylor Prize', detail: 'Winner 2020' },
        { kind: '出版', label: 'El Jardín de Senderos Que Se Bifurcan · DAIS', detail: '2021' },
        { kind: '收藏', label: 'Museum of Modern Art (MoMA)', detail: '27 works acquired' }
      ]
    },
    {
      title: 'Master Rituals I: Ansel Adams', cluster: 'Photo history / canon / redaction', period: '2018',
      summary: '直接改造 Ansel Adams 的经典摄影教材：用身体、手、头发、咖啡、遮挡和再摄影把大师文本变成新的诗与图像。',
      actions: ['使用 Adams 的 Examples: The Making of 40 Photographs', '把自己档案覆盖原图', '用手 / 头发 / 身体遮蔽文字', '使用咖啡与头发作用于打印物', '录像记录擦除与遮挡动作', '重拍处理后的图像', '制作 altered book'],
      sourceUrl: 'https://www.tarrahkrajnak.com/master-rituals-i-ansel-adams', images: [], relations: []
    },
    {
      title: '1979: Contact Negatives', cluster: 'Darkroom performance / Lima / body', period: '2019',
      summary: '在现场把 1979 年利马影像投到身体上，使用两台 8×10 相机和临时暗房完成持续时间表演与 18 张大画幅图像。',
      actions: ['搭建临时暗房', '设置两台 8×10 相机', '投影 1979 年利马历史影像', '身体进入投影并自拍', '现场冲洗负片', '制作 contact prints / cyanotypes', '公开展示摄影生产流程'],
      sourceUrl: 'https://tarrahkrajnak.com/1979-contact-negatives--', images: [],
      relations: [{ kind: '收藏', label: 'Victoria and Albert Museum (V&A)', detail: '1979: Contact Negatives acquired' }]
    },
    {
      title: 'Master Rituals II: Weston’s Nudes', cluster: 'Photo history / nude / agency', period: '2020',
      summary: '重演 Edward Weston 的裸体经典，同时把快门控制权、完整身体和直接凝视重新交给艺术家自己。',
      actions: ['研究 Weston 的裸体作品与模特姿势', '复制 Bertha Wardell / Charis Wilson 等姿势', '艺术家同时担任摄影师和模特', '保留快门线进入画面', '改变原作裁切', '加入测光表 / 防毒面具 / 凝视等反向动作', '出版摄影书并制作 collotype 版本'],
      sourceUrl: 'https://tarrahkrajnak.com/master-rituals-ii-weston-s-nudes', images: [],
      relations: [
        { kind: '奖项', label: 'Louis Roederer Discovery Award', detail: 'Jury Award 2021 · Les Rencontres d’Arles' },
        { kind: '收藏', label: 'Centre Pompidou', detail: 'portfolio acquired 2021' },
        { kind: '出版', label: 'Master Rituals II: Weston’s Nudes · TBW Books', detail: '2022' },
        { kind: '展览', label: 'KYOTOGRAPHIE', detail: '2024 · collotype edition' }
      ]
    },
    {
      title: 'Ayni (Offerings for my Sister)', cluster: 'Ecopoetics / ritual / cyanotype', period: '2020–2022',
      summary: '把日光、身体、长时间动作和青版结合为一组献祭式作品，强调摄影作为身体时间而非快门瞬间。',
      actions: ['进行 durational body performances', '在 Arches 纸上制作大型 cyanotypes', '以 For Ana / For Agnes 等命名形成献祭结构', '记录身体站立 / 动作', '同时制作银盐照片与表演录像'],
      sourceUrl: 'https://www.tarrahkrajnak.com/rock-paper-sun', images: [], relations: []
    },
    {
      title: 'Automatic Rocks / Excavation / Dark Constellations', cluster: 'Ecopoetics / non-human archive', period: '2020–2022',
      summary: '围绕岩石、身体隐喻、诗歌和太阳化暗房实验，把非人对象变成能够承载记忆与伤害的图像档案。',
      actions: ['拍摄岩石与地貌', '把图像与实验诗 / 身体性标题组成双联', '制作独一版 solarized silver gelatin prints', '把作品编成 Dark Constellations 网格', '与 Ayni 一起组成 Rock, Paper, Sun'],
      sourceUrl: 'https://www.tarrahkrajnak.com/rock-paper-sun', images: [],
      relations: [{ kind: '展览', label: 'Galerie Thomas Zander · Rock, Paper, Sun', detail: '2023' }]
    },
    {
      title: 'Forestpath', cluster: 'Site / copy / ecology', period: '2021–2023',
      summary: '把火灾后的森林地面按 1:1 比例印成银盐照片，再把照片带回原地覆盖真实地面并重新摄影。',
      actions: ['拍摄 Big Sur 森林地面', '1:1 比例印制 27 张银盐照片', '把照片带回原地点铺设', '重新拍摄复制物覆盖原物的状态', '在工作室踩踏照片', '朗读删改后的 Ansel Adams 演讲'],
      sourceUrl: 'https://www.tarrahkrajnak.com/forestpath', images: [], relations: []
    },
    {
      title: 'RePose', cluster: 'Pose archive / live darkroom / performance', period: '2022–present',
      summary: '从跨越时尚、色情、艺术史和人类学的数百张“女性姿势”图像中现场选姿势，用自己的身体重演，并在展场暗房即时冲印。',
      actions: ['收集数百张女性姿势图像', 'Xerox 并铺设成姿态档案', '现场选择姿势', '用身体逐一重演', '使用现场摄影棚拍摄', '每日在现场暗房显影与银盐印相', '把新自拍与原始姿势图并排', '持续累积为约 60 张银盐 portfolio'],
      sourceUrl: 'https://tarrahkrajnak.com/repose-', images: [],
      relations: [
        { kind: '展览', label: 'REDCAT · RePose performance', detail: '2022' },
        { kind: '出版', label: 'RePose · FW Books', detail: '2023' },
        { kind: '展览', label: 'Palazzo Grassi / Pinault Collection · Chronorama Redux', detail: '2023–2024' },
        { kind: '展览', label: 'Fondation A Stichting · RePose, ExPose, CounterPose', detail: '2025–2026' }
      ]
    },
    {
      title: 'Shadowings. A Catalogue of Attitudes for Estranged Daughters', cluster: 'Museum survey / body / archive', period: '2023–2024',
      summary: 'Huis Marseille 首个大型欧洲个展，把 1979 Contact Negatives、Master Rituals、Ayni、Automatic Rocks、Black Messengers 等系列放在同一身体—档案脉络中。',
      actions: ['把多个长期系列重新编排为博物馆展览', '让写作、照片、表演和暗房作品互相穿插', '使用展览标题建立“estranged daughters”共同语境'],
      sourceUrl: 'https://huismarseille.nl/en/exhibitions/tarrah-krajnak/', images: [],
      relations: [{ kind: '展览', label: 'Huis Marseille Museum for Photography', detail: '2023–2024 · solo exhibition' }]
    },
    {
      title: 'Body Configurations (Lima)', cluster: 'Body / city / architecture', period: '2024–2025',
      summary: '在利马城市结构中安排和弯折身体，把身体姿态作为测量、占据和改写建筑空间的方法。',
      actions: ['在利马寻找建筑与公共空间', '身体进入台阶 / 墙面 / 几何结构', '使用黑白胶片和银盐印相', '将单张放大为 16×20 英尺户外 banner'],
      sourceUrl: 'https://fryemuseum.org/exhibitions/boren-banner-series-tarrah-krajnak', images: [],
      relations: [{ kind: '展览', label: 'Frye Art Museum · Boren Banner Series', detail: '2025' }]
    },
    {
      title: 'Crowds', cluster: 'Political gesture / performance / darkroom', period: '2025',
      summary: '把 1979 年利马及拉丁美洲抗议群众图像中的举臂、牵手、排队、休息等姿态重新表演为 8×10 银盐摄影。',
      actions: ['研究历史群众图像', '提取群体姿态', '在 ICP 现场用身体重演', '8×10 胶片拍摄', '现场冲洗并 contact print', '回洛杉矶暗房放大为 40×50 银盐作品'],
      sourceUrl: 'https://tarrahkrajnak.com/crowds', images: [],
      relations: [{ kind: '展览', label: 'International Center of Photography (ICP)', detail: '2025 performance / production' }]
    },
    {
      title: 'Dislocations (working title)', cluster: 'Lewis Baltz / industrial landscape / body', period: '2025–2027',
      summary: '重访 Lewis Baltz 1974 年 Irvine 工业园摄影地点，并把自己的身体重新放回这些曾被极度去人物化的工业景观。',
      actions: ['定位 Lewis Baltz 原拍摄地点', '重新拍摄今日工业环境', '把自己的身体放入画面', '连接移民身份、工业景观与当代政治暴力', '持续制作至 2026', '为 2027 Fondation HCB 展览和出版准备'],
      sourceUrl: 'https://www.henricartierbresson.org/en/laureats/tarrah-krajnak/', images: [],
      relations: [{ kind: '奖项', label: 'Henri Cartier-Bresson Creation Award', detail: 'Winner 2025 · exhibition/publication 2027' }]
    }
  ];

  const existingTitles = new Set(detailedProjects.map(project => project.title));
  const preservedInstitutionNodes = archive.projects.filter(project => !existingTitles.has(project.title));
  archive.projects = [...detailedProjects, ...preservedInstitutionNodes];
  archive.projectCoverage = '核心项目已建立完整动作档案：Pose Archive、Sismos79 / 1979、Time Twins、El Jardín、Master Rituals I / II、1979 Contact Negatives、Ayni、Automatic Rocks、Forestpath、RePose、Body Configurations、Crowds、Dislocations；机构节点继续并行保留。';
  archive.imageCoverage = '当前以官方项目页 / 博物馆展览页为图像与作品信息来源；站内逐项目图像仍可继续补充。';
  archive.note = '阅读 Krajnak 时优先看她实际做了什么：找档案、重演姿态、让身体进入经典图像、搭暗房、现场冲洗、遮挡文字、再摄影、把原图与新图并置。她的“摄影史批评”主要发生在这些具体动作里。';
  archive.awards = Array.from(new Set([
    ...archive.awards,
    'ICP Infinity Award 2026 · Photographic Art and New Media',
    'Henri Cartier-Bresson Creation Award 2025 · Winner · Dislocations',
    'Deutsche Börse Photography Foundation Prize 2025 · Shortlist',
    'Guggenheim Fellowship 2024',
    'Howard Foundation Fellowship 2022',
    'Hariban Award 2021 · Grand Prize',
    'Louis Roederer Discovery Award 2021 · Jury Award',
    'Lewis Baltz Research Fund Award 2021',
    'Dorothea Lange–Paul Taylor Prize 2020'
  ]));
  archive.exhibitions = Array.from(new Set([
    ...archive.exhibitions,
    'Huis Marseille · Shadowings. A Catalogue of Attitudes for Estranged Daughters · 2023–2024',
    'KYOTOGRAPHIE · Master Rituals II: Weston’s Nudes · 2024',
    'Frye Art Museum · Boren Banner Series / Body Configurations · 2025',
    'The Photographers’ Gallery · Deutsche Börse Photography Foundation Prize · 2025',
    'Fondation A Stichting · RePose, ExPose, CounterPose · 2025–2026',
    'Fondation Henri Cartier-Bresson · Dislocations · scheduled 2027'
  ]));
  archive.sources = Array.from(new Map([
    ...archive.sources,
    { label: 'Tarrah Krajnak · official bio', url: 'https://www.tarrahkrajnak.com/bio' },
    { label: '1979: Contact Negatives', url: 'https://tarrahkrajnak.com/1979-contact-negatives--' },
    { label: 'Master Rituals I: Ansel Adams', url: 'https://www.tarrahkrajnak.com/master-rituals-i-ansel-adams' },
    { label: 'Master Rituals II: Weston’s Nudes', url: 'https://tarrahkrajnak.com/master-rituals-ii-weston-s-nudes' },
    { label: 'RePose', url: 'https://tarrahkrajnak.com/repose-' },
    { label: 'Forestpath', url: 'https://www.tarrahkrajnak.com/forestpath' },
    { label: 'Huis Marseille · Shadowings', url: 'https://huismarseille.nl/en/exhibitions/tarrah-krajnak/' },
    { label: 'Frye Art Museum · Boren Banner Series', url: 'https://fryemuseum.org/exhibitions/boren-banner-series-tarrah-krajnak' },
    { label: 'ICP Infinity Award 2026', url: 'https://www.icp.org/news/2026-infinity-award-photographic-art-and-new-media-award-tarrah-krajnak' },
    { label: 'Fondation HCB · Tarrah Krajnak', url: 'https://www.henricartierbresson.org/en/laureats/tarrah-krajnak/' },
    { label: 'Les Rencontres d’Arles · 2021', url: 'https://www.rencontres-arles.com/en/editions/2021' }
  ].map(source => [source.url, source])).values());
  artistArchives[artist.id] = archive;
}
