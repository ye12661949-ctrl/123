import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch47: Record<string, ArtistArchive> = {
  'wawi-navarroza': {
    artistId: 'wawi-navarroza',
    projectCoverage: '6 个自画像 / Tropical Gothic / 迁移节点已建立深档案 · 2010s–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: 'Navarroza 的复杂布景不是“拍照背景”。她把织物、植物、食物、家庭物件、手工艺、画框和自己的身体都当成平级材料，在摄影棚里做真实 collage。后期重点不在生成不可能空间，而在控制色彩、平面密度和物件之间的文化关系。',
    projects: [
      {
        title: 'Tropical Gothic — studio tableau system', cluster: 'self-portrait / in-studio collage / postcolonial visual language', period: '2010s–现在',
        summary: '她借菲律宾文化中“热带哥特”的混杂性处理本土、西班牙天主教、美国流行文化与东南亚视觉传统。作品通过摄影棚里的真实布景把这种文化混合直接压到一个平面。',
        actions: ['先从地方记忆 / 殖民图像 / 流行文化搜集视觉符号', '选择织物、花卉、塑料、家具、食物与手工艺品', '在摄影棚实际搭建多层平面而非后期拼接背景', '艺术家本人进入画面作为身体尺度', '精确控制正面灯光和综合色彩', '让背景图案、服装与身体边缘故意发生冲突', '用大型输出保留物件材质'],
        sourceUrl: 'https://www.wawinavarroza.com/the-other-shore', images: [], relations: []
      },
      {
        title: 'Return to colour', cluster: 'illness / Southeast Asian colour / polychrome shift', period: 'late-2010s–2020s',
        summary: '她经历严重 dengue 后，作品从更克制的单色 / 冷色阶段明显转向饱和热带色彩。这个变化不是简单审美更新，而与身体恢复和重新连接东南亚身份有关。',
        actions: ['回看此前单色作品的限制', '主动增加菲律宾织物和高饱和综合色彩', '把节庆 / fiesta 的色彩记忆带回工作室', '使用综合色块组织人物与物件层级', '让色彩本身承担“恢复 / 重生”叙事'],
        sourceUrl: 'https://www.wawinavarroza.com/the-other-shore', images: [], relations: []
      },
      {
        title: 'As Wild As We Come', cluster: 'motherhood / migration / self-portrait / studio collage', period: '2022',
        summary: '在成为母亲、从 Manila 移居 Istanbul 后，她以一组自画像处理身体变化、迁移与“wild”这个被东方主义使用的词。每张图都像一个人工祭坛，同时混合菲律宾与跨亚洲视觉材料。',
        actions: ['从怀孕 / 生育后的身体经验建立场景主题', '收集菲律宾 heritage textile 与迁移途中获得的物件', '制作多层彩色背景和桌面结构', '选择陶器、珍珠、食物、植物等象征物', '艺术家自行造型并出演', '以摄影棚灯光把复杂表面压成近似图案化平面', '使用 artist-designed frame 延伸画面综合色彩'],
        sourceUrl: 'https://www.wawinavarroza.com/aswildaswecome', images: [], relations: [rel('展览', 'As Wild As We Come — Kristin Hjellegjerde Gallery, London', '2022')]
      },
      {
        title: 'The Other Shore', cluster: 'retrospective self-portrait / Orient / transregional references', period: '2023–2024',
        summary: 'The Other Shore 把多年自画像集中起来，同时把 Anatolia 到 Pacific 的“Orient”内部差异放回作品。她引用中国屏风、日本浮世绘、泰国壁画、Bhutan thangka 等，而不是把“亚洲视觉”做成一个统一符号。',
        actions: ['从多年自画像中重新选择跨阶段作品', '研究不同亚洲地区的具体视觉传统', '将不同来源转换为布景 / 图案 / 服装线索', '避免只用单一“东方风格”概括', '通过展览 sequence 显示单色→综合色彩→母职 / 迁移的变化'],
        sourceUrl: 'https://www.wawinavarroza.com/the-other-shore', images: [], relations: [rel('展览', 'The Other Shore — Silverlens New York', '2024')]
      },
      {
        title: 'Rosas Pandan / returning to Manila', cluster: 'folk memory / domestic abundance / self-portrait', period: '2023',
        summary: 'Rosas Pandan 等新作重新在 Manila 制作，把水果、蔬菜、花、手工纺织、塑料装饰和个人物件组织成高度密集的自画像。日常市场材料获得和传统绘画同等的视觉权重。',
        actions: ['在 Manila 本地市场 / 家庭环境搜集食物与花卉', '加入 patadyong 等菲律宾纺织材料', '把廉价塑料、手工艺与“高艺术”构图并置', '建立桌面式静物前景', '在布景中嵌入相机 / 鞋等个人物件', '让自画像人物与静物不分主次'],
        sourceUrl: 'https://www.wawinavarroza.com/the-other-shore', images: [], relations: []
      },
      {
        title: 'Studio bricolage as method', cluster: 'meta-method / object research / framing / self-direction', period: '2010s–现在',
        summary: '她的稳定生产链是：先研究视觉来源，再收集真实物件，摄影棚搭景，自己进入画面，最后用定制框架继续扩展照片。作品的知识结构就藏在“摆了什么、为什么一起摆”里。',
        actions: ['为每张图建立物件 / 图案来源清单', '使用真实材料而非纯数字纹理', '独立控制人物、布景与灯光', '拍摄后只做必要综合色彩与平面整理', '设计与作品综合色彩对应的实体画框', '在展览中以多张大型 tableau 建立“自我档案”'],
        sourceUrl: 'https://www.wawinavarroza.com/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['As Wild As We Come — London 2022', 'The Other Shore — Silverlens New York 2024', 'Wild at Heart — Fotografiska Shanghai 2025', 'Self & Surrounding — De La Salle University 2025'],
    sources: [
      { label: 'Wawi Navarroza Studio', url: 'https://www.wawinavarroza.com/' },
      { label: 'As Wild As We Come', url: 'https://www.wawinavarroza.com/aswildaswecome' },
      { label: 'The Other Shore', url: 'https://www.wawinavarroza.com/the-other-shore' }
    ]
  },

  'rosangela-renno': {
    artistId: 'rosangela-renno',
    projectCoverage: '7 个 found-image / 制度档案 / 图像价值节点已建立深档案 · 1988–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: 'Rennó 的核心工作几乎总发生在“别人不要的图像”上：废弃照片、监狱档案、工人证件照、旧相机、跳蚤市场物件。她不只是挪用图像，而是把图像为什么被保存、分类、贬值、遗忘、再次交易的制度路径一起做成作品。',
    projects: [
      {
        title: 'Discarded-photo archive / Pequena ecologia da imagem', cluster: 'found photo / collecting / image ecology', period: 'late-1980s–',
        summary: '到1980年代末她已经持续收集被丢弃的照片、底片与幻灯片。作品由此建立一个“图像生态”：摄影价值不是固定的，同一张家庭照可能从珍贵记忆变成垃圾，再被艺术系统重新定价。',
        actions: ['在跳蚤市场 / 废弃物 / 二手渠道持续收集影像', '保留原图划痕、编号和损耗', '按来源 / 图像类型重新分类', '不追求找到原作者', '通过标题和安装改变观看语境', '把“图像被丢弃的原因”作为作品问题'],
        sourceUrl: 'https://www.rosangelarenno.com/archive', images: [], relations: []
      },
      {
        title: 'Imemorial', cluster: 'Brasília workers / institutional archive / erased labour', period: '1994',
        summary: '她从巴西利亚公共档案中超过一万五千份 Novacap 建设工人资料寻找图像，并把那些被制度以极简方式记录甚至“因死亡而解雇”的劳动者重新带入可见性。',
        actions: ['进入公共档案查找 Brasília 建设资料', '从大量员工文件筛选证件式照片', '追踪档案中的死亡 / 解雇记录', '复制 / 放大原本低等级行政图像', '以纪念性空间结构重新安装', '让国家现代化宏大叙事与匿名劳动者直接冲突'],
        sourceUrl: 'https://rosangelarenno.com/imemorial', images: [], relations: []
      },
      {
        title: 'Cicatriz / Vulgo', cluster: 'prison archive / body classification / rephotography', period: '1996–2003',
        summary: '从 São Paulo 旧监狱摄影档案中恢复囚犯身体、纹身和后脑等分类图像。原档案试图把身体变成可管理的“犯罪类型”，她则通过裁切、着色、放大与重新命名暴露这套观看制度。',
        actions: ['研究被废弃的监狱摄影档案', '选择纹身 / 头部 / 身体局部底片', '重新复制原负片', '保留原临床式构图缺陷', '在部分作品中加入淡红色 / 重新着色', '通过标题给无名身体新的文本层', '与制度原始记录分离展示'],
        sourceUrl: 'https://rosangelarenno.com/s%C3%A9rie-vulgo-1', images: [], relations: [rel('收藏', 'MoMA', 'Vulgo / related works represented')]
      },
      {
        title: 'Wedding Landscape', cluster: 'negative / transparency / memory surface', period: '1996',
        summary: '婚礼图像不被当成幸福纪念，而以胶片负片、透明材质与展示结构重新出现，强调私人记忆最初就依赖脆弱的摄影材料。',
        actions: ['使用既有婚礼底片而非重新拍婚礼', '保留负像状态', '把底片放大到远离家庭相册尺度', '使用 acrylic 等透明支撑材料', '让观看者同时看到图像与物质载体'],
        sourceUrl: 'https://www.moma.org/collection/works/222098', images: [], relations: [rel('收藏', 'MoMA', 'Wedding Landscape, 1996')]
      },
      {
        title: 'Bibliotheca', cluster: 'photo albums / archive object / inaccessible image', period: '2002',
        summary: 'Rennó 收集家庭相册并把“相册作为完整物件”而非只抽取好看的单张来处理。图像的私人组织方式、封面、顺序与不可访问性成为重点。',
        actions: ['收集完整私人相册', '保留原始页序 / 物理痕迹', '记录来源与相册结构', '不把照片完全拆散成单张', '以档案柜 / 展示系统重新组织', '让观众意识到“不能完整看到”也是档案权力'],
        sourceUrl: 'https://www.rosangelarenno.com/bibliotheca', images: [], relations: []
      },
      {
        title: 'A Última Foto', cluster: 'analogue camera / collaboration / last image / destruction', period: '2006',
        summary: '她邀请四十多位摄影师从自己的旧模拟相机收藏中各选一台，拍摄 Rio 的 Cristo Redentor。项目把“最后一次使用相机”变成摄影生产规则，讨论模拟系统被数字替代。',
        actions: ['从个人收藏提供多种旧模拟相机', '邀请专业摄影师各自选择一台', '为每人提供胶卷并限定拍同一 Cristo Redentor', '由参与者使用不同相机完成最终拍摄', '收集结果并编辑成展览 / 书', '把相机本身作为时代终结的物件'],
        sourceUrl: 'https://rosangelarenno.com/a-%C3%BAltima-foto%2C-2006-1', images: [], relations: [rel('展览', 'A Última Foto — Galeria Vermelho', '2006'), rel('出版', 'A Última Foto', '2006')]
      },
      {
        title: 'Menos-valia [leilão]', cluster: 'flea-market object / auction / value production', period: '2010–2013',
        summary: '她在不同国家跳蚤市场买下七十余件摄影相关旧物，修复 / 重组后放入 São Paulo Bienal，最终公开拍卖。展览、竞价、售出后的空房间和之后出版的书都被定义为同一作品。',
        actions: ['在多国跳蚤市场搜集摄影相关旧物', '记录每件物品来源', '选择性修复 / 重组 / 重新命名', '在双年展中以“拍卖前状态”安装', '现场公开拍卖全部物品', '记录成交价格和观众行为', '将拍卖音频 / lot description / 成交信息编辑成书'],
        sourceUrl: 'https://rosangelarenno.com/menos-valia-%5Bleil%C3%A3o%5D%2C-2013', images: [], relations: [rel('展览', '29th São Paulo Bienal', '2010'), rel('出版', 'Menos-valia [leilão]', '2013')]
      }
    ],
    awards: [],
    exhibitions: ['29th São Paulo Bienal 2010', 'Chosen Memories — MoMA 2023'],
    sources: [
      { label: 'Rosângela Rennó — Archive', url: 'https://www.rosangelarenno.com/archive' },
      { label: 'MoMA — Rosângela Rennó', url: 'https://www.moma.org/artists/45951-rosangela-renno' },
      { label: 'A Última Foto', url: 'https://rosangelarenno.com/a-%C3%BAltima-foto%2C-2006-1' },
      { label: 'Menos-valia', url: 'https://rosangelarenno.com/menos-valia-%5Bleil%C3%A3o%5D%2C-2013' }
    ]
  },

  'masahisa-fukase': {
    artistId: 'masahisa-fukase',
    projectCoverage: '8 个私人关系 / 摄影书 / 自我表演节点已建立深档案 · 1961–1992',
    imageCoverage: '0 / 8 项目已有代表图像',
    note: '深濑昌久不应只剩下《鸦》。他的实践几乎全部从身边可以触摸的人和物出发：妻子、父亲、家庭照相馆、猫、街道裂缝、自己的脸。摄影常常反过来侵入亲密关系，越拍越接近“摄影者自己”。',
    projects: [
      {
        title: 'Kill the Pig / Naked', cluster: 'slaughterhouse / intimate body / early confrontation', period: '1961',
        summary: '第一次个展已经把屠宰场影像、伴侣裸体和死胎等极私人 / 肉身材料放在一起，形成他此后“爱、死亡、身体、摄影纠缠”的底层结构。',
        actions: ['在屠宰场近距离拍摄动物身体', '同时拍伴侣与私人生活', '把公共劳动现场与最私密身体并置', '以系列而非单张组织极端题材'],
        sourceUrl: 'https://masahisafukase.com/the-whimsical-and-eye-2023/', images: [], relations: [rel('展览', 'Kill the Pig — first solo exhibition', '1961')]
      },
      {
        title: 'Yoko / From Window', cluster: 'marriage / repeated portrait / everyday performance', period: '1960s–1970s',
        summary: '妻子洋子长期成为他的核心对象。尤其“从窗户”系列不断从同一建筑视点拍洋子在街面出现，亲密关系被转换成重复规则和距离实验。',
        actions: ['长期拍摄同一伴侣', '在家 / 街道 / 旅行中持续制作不同角色肖像', '建立高处窗户—街道的固定观看关系', '让被摄者主动表演 / 回望', '通过多年积累让婚姻本身变成序列'],
        sourceUrl: 'https://masahisafukase.com/', images: [], relations: [rel('出版', 'Yohko', '1978')]
      },
      {
        title: 'Ravens / Karasu', cluster: 'journey / crow / divorce / photobook sequence', period: '1976–1985',
        summary: '离婚前后从北海道旅行开始，大量拍乌鸦、夜色、雪、海面和旅途残片。乌鸦不是自然题材，而在反复出现中逐渐成为孤独、失落和摄影者心理的代理。',
        actions: ['在北海道 / 日本各地旅行拍摄', '以高反差黑白胶片抓拍乌鸦群和孤鸟', '大量拍夜间 / 雪地 / 海岸低可见度场景', '把偶发形态靠重复拍摄变成视觉符号', '跨多年继续追加“episode”', '通过摄影书 sequence 强化黑暗节奏'],
        sourceUrl: 'https://masahisafukase.com/timeline/', images: [], relations: [rel('奖项', 'Nobuo Ina Award', '1977'), rel('出版', 'Ravens', '1986')]
      },
      {
        title: 'Sasuke / Momoe', cluster: 'cat / eye-level camera / play / intimate observation', period: '1977–1979',
        summary: '他收养 Sasuke 后决定持续一年从猫的高度拍摄，之后加入另一只猫 Momoe。方法不是普通宠物记录，而是主动把相机降低到动物身体尺度，并把游戏、嘴、爪和动作变成高度主观的亲密实验。',
        actions: ['长期只拍自己养的猫', '降低机位到猫眼高度', '近距离等待张嘴 / 跳跃 / 互动动作', '使用闪光和快速抓拍强化身体感', '加入第二只猫制造关系变化', '把日常游戏编辑成完整书籍'],
        sourceUrl: 'https://masahisafukase.com/timeline/', images: [], relations: [rel('出版', 'Viva! Sasuke', '1978'), rel('出版', 'The Strawhat Cat', '1979')]
      },
      {
        title: 'Family / Memories of Father', cluster: 'family studio / repeated group portrait / ageing / death', period: '1970s–1991',
        summary: '他持续回北海道家族照相馆拍固定式家庭合影。人物出生、结婚、衰老、离开，照相馆布景近似不变，使时间直接写在身体和人员缺席中。',
        actions: ['反复返回家族照相馆', '使用工作室式集体肖像格式', '保持布景 / 机位相对稳定', '让家庭成员自由加入或缺席', '在父亲衰老 / 去世过程中继续拍摄', '按时间顺序编辑31张家庭照', '把私人纪念转成时间结构'],
        sourceUrl: 'https://masahisafukase.com/1-photo-book/', images: [], relations: [rel('出版', 'Family', '1991'), rel('出版', 'Memories of Father', '1991')]
      },
      {
        title: 'Hibi', cluster: 'street surface / trace / serial close-up', period: '1990s',
        summary: '晚期把注意力转向道路表面的裂缝、磨损标线和箭头。没有“重要事件”，只有城市被无数人走过后留下的抽象痕迹。',
        actions: ['把镜头持续朝向道路 / 地面', '寻找裂缝和磨损标线', '排除完整街景背景', '以黑白近距离把痕迹压成抽象图形', '通过大量重复形成城市身体感'],
        sourceUrl: 'https://masahisafukase.com/1-photo-book/', images: [], relations: [rel('出版', 'Hibi', 'posthumous edition 2016')]
      },
      {
        title: 'Private Scenes / painted self-images', cluster: 'self-portrait / graphic intervention / Polaroid / ego', period: '1990–1992',
        summary: '工作生涯末期相机越来越直接转向自己。他使用旅行自拍、巨大 Polaroid、涂画和图像表面干预，让“我是谁”不再投射到妻子 / 乌鸦 / 猫，而直接作用于自己的脸。',
        actions: ['旅行中反复自拍', '使用镜面 / 反射 / 伸手入镜制造自我介入', '测试 giant Polaroid', '在照片表面直接绘画 / 涂写', '把摄影和 graphic mark 合并', '在展览中混合照片、笔记和实验材料'],
        sourceUrl: 'https://masahisafukase.com/play-2018/', images: [], relations: []
      },
      {
        title: 'Photobook as psychological construction', cluster: 'meta-method / sequence / autobiography', period: '1960s–1991',
        summary: '深濑大量作品必须通过书理解。单张未必具有“代表性”，但人物 / 动物 / 黑暗 / 空白一旦被重复排列，就会逐渐变成摄影者自己的心理结构。',
        actions: ['长期以系列积累而非单次项目完成', '在书中反复同一对象 / 符号', '使用跨页 / 黑页 / 图像密度控制情绪', '让生活时间和出版时间错开', '在后期版本中重新调用未发表档案'],
        sourceUrl: 'https://masahisafukase.com/biography/', images: [], relations: []
      }
    ],
    awards: ['Nobuo Ina Award 1977', 'Higashikawa Special Prize 1992'],
    exhibitions: ['New Japanese Photography — MoMA 1974', 'Masahisa Fukase 1961–1991 Retrospective — Tokyo Photographic Art Museum 2023'],
    sources: [
      { label: 'Masahisa Fukase Archives', url: 'https://masahisafukase.com/' },
      { label: 'Timeline', url: 'https://masahisafukase.com/timeline/' },
      { label: 'Biography', url: 'https://masahisafukase.com/biography/' },
      { label: 'Photobooks archive', url: 'https://masahisafukase.com/1-photo-book/' }
    ]
  },

  'jungjin-lee': {
    artistId: 'jungjin-lee',
    projectCoverage: '6 个景观 / 物件 / 韩纸手工印相节点已建立深档案 · 1989–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: 'Jungjin Lee 的关键不是“东方禅意黑白”。她从1989年前后建立了一套极慢的手工印相流程：胶片拍摄 → 暗房 → 在韩纸上刷 Liquid Light 感光乳剂 → 乳剂渗入纸纤维 → 再显影。图像不是躺在纸面，而像从纸内部长出来。',
    projects: [
      {
        title: 'Hanji printing method', cluster: 'handmade print / Liquid Light / mulberry paper', period: '1989–现在',
        summary: '她在纽约发展出以韩国楮皮手工纸 hanji 为基础的独特银盐印相。粗纤维、吸水性和手刷乳剂使每张输出都带有不可完全复制的物质差异。',
        actions: ['选择厚重手工 hanji / mulberry paper', '在暗房手工刷 Liquid Light 感光乳剂', '让乳剂渗入纸纤维而不是形成光滑涂层', '等待纸张干燥并进行曝光', '传统显影 / 定影', '接受刷痕、纤维和边缘不均匀', '以独一手工印相而非工业统一纸张完成作品'],
        sourceUrl: 'https://art.state.gov/personnel/jungjin_lee/', images: [], relations: []
      },
      {
        title: 'American Desert', cluster: 'desert / migration / cross-cultural landscape', period: '1990s',
        summary: '移居纽约后，她连续多年进入美国沙漠。地点具有典型美国现代摄影传统，但最终通过 hanji 物质和东亚绘画式空间感被重新组织。',
        actions: ['数年反复进入美国西部荒漠', '使用胶片摄影记录大尺度空地与道路', '选择低叙事、低地标的地景', '回到暗房以hanji重新输出', '通过深黑和大片留白压低地点说明性', '让纸张纤维介入天空 / 土地综合色阶'],
        sourceUrl: 'https://www.jungjinlee.com/the-transterritorial-photographic-tableau', images: [], relations: []
      },
      {
        title: 'Wind', cluster: 'landscape / air / minimal form / tactile print', period: '2000s',
        summary: 'Wind 进一步减少具体地理信息，土地、道路、植物和空气被压缩成少量形状。风本身不可见，只通过地貌和表面状态被间接读取。',
        actions: ['寻找开放地貌和极简结构', '避免人物与城市标志', '使用长综合色阶保留空气层次', '在hanji上手工印相', '通过粗纸吸收使轮廓变得不完全锐利', '按视觉呼吸感而非地点顺序编辑'],
        sourceUrl: 'https://www.jungjinlee.com/collections', images: [], relations: []
      },
      {
        title: 'Thing', cluster: 'ordinary object / scale / hanji / photographic object', period: '2000s–2010s',
        summary: 'Thing 把旧弹簧、叶子、鞋等普通对象放大。对象越普通，越依赖纸张、比例和光线让其脱离实用身份，变成近似“不可解释物”。',
        actions: ['选择低价值日常物 / 残片', '在胶片上进行克制单物摄影', '放大到远超物件通常观看尺寸', '刷制hanji感光纸', '让纸张粗纤维穿过物体细节', '通过空背景减少功能信息'],
        sourceUrl: 'https://www.jungjinlee.com/david-parker', images: [], relations: []
      },
      {
        title: 'Material surface as image content', cluster: 'paper / brush / absorption / unique print', period: '1990s–现在',
        summary: '她的作品必须近距离看实体：黑色并非普通相纸均匀黑，而来自乳剂渗入纤维后的深度，纸张起伏也会改变图像。材料不是承载照片，而是生成照片。',
        actions: ['根据图像挑选纸张纤维状态', '手刷乳剂决定局部密度', '允许乳剂吸收形成非均匀灰阶', '保留纸张自然毛边 / 纹理', '不追求每张版次完全一致', '在展览照明中强调纸面而非玻璃反光'],
        sourceUrl: 'https://art.state.gov/personnel/jungjin_lee/', images: [], relations: []
      },
      {
        title: 'Landscape as mental-physical process', cluster: 'meta-method / meditation / process over result', period: '1990s–现在',
        summary: 'Lee 明确强调“真正的摄影”不只在最终图像，而在制作过程。拍摄、暗房、手工刷纸与等待共同形成观看土地的时间。',
        actions: ['以长期旅行而非一次取景积累素材', '让拍摄对象保持简单', '回到暗房重新决定图像强度', '把身体手工劳动纳入成像', '用过程降低摄影作为“现实复制”的透明性'],
        sourceUrl: 'https://art.state.gov/personnel/jungjin_lee/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: [],
    sources: [
      { label: 'Jungjin Lee Studio', url: 'https://www.jungjinlee.com/' },
      { label: 'Hanji process — U.S. Department of State', url: 'https://art.state.gov/personnel/jungjin_lee/' },
      { label: 'Thing — David Parker essay', url: 'https://www.jungjinlee.com/david-parker' },
      { label: 'Transterritorial Photographic Tableau', url: 'https://www.jungjinlee.com/the-transterritorial-photographic-tableau' }
    ]
  },

  'wang-qingsong': {
    artistId: 'wang-qingsong',
    projectCoverage: '7 个大型 tableau / 社会讽刺 / 群体生产节点已建立深档案 · 1990s–现在',
    imageCoverage: '0 / 7 项目已有代表图像',
    note: '王庆松的摄影更接近电影制片：社会议题先被改写成一个可拍的场景，再制作巨型布景、找几十个演员、准备服装道具、排练、最后用一张大画幅照片压缩。分析时应先拆生产规模，而不是只看满屏符号。',
    projects: [
      {
        title: 'Requesting Buddha', cluster: 'self-performance / consumer icon / parody', period: '1999',
        summary: '从绘画转向摄影初期，他使用自己的身体，把佛教多臂图像与 Coca-Cola、香烟、手机、钞票等消费物拼成一张强烈讽刺性 tableau。',
        actions: ['选择传统宗教图像结构作为基础', '由艺术家本人出演', '准备消费品牌 / 现金 / 酒 / 手机等道具', '通过多臂式构图组织大量物件', '使用综合色彩背景强化商业图像感', '以摄影将表演固定为单一画面'],
        sourceUrl: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide', images: [], relations: []
      },
      {
        title: 'Bathhouse', cluster: 'public life / staged crowd / modernization', period: '2000',
        summary: '把公共生活和身体消费转成大型群体场景。人物数量、姿势与道具构成接近历史绘画的整体场面，而非街头纪录。',
        actions: ['先画 / 规划整体群体构图', '寻找大型场地', '组织多名演员', '搭建浴场 / 公共空间道具', '分区安排动作避免画面混乱', '以大画幅 / 高细节摄影完成'],
        sourceUrl: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide', images: [], relations: []
      },
      {
        title: 'Follow Me', cluster: 'education / blackboard / self-performance / globalization', period: '2003',
        summary: '艺术家站在巨型黑板前，黑板密集写满中英文符号与知识碎片，借“跟我学”式语言培训结构讽刺全球化与教育焦虑。',
        actions: ['收集英语教育 / 商业 / 社会综合色词汇', '制作超大黑板布景', '手工写满综合色文字与符号', '由艺术家扮演教师 / 引导者', '使用正面宽幅构图', '让文字密度成为画面综合色噪音'],
        sourceUrl: 'https://www.mori.art.museum/en/collection/2330/index.html', images: [], relations: [rel('收藏', 'Mori Art Museum', 'Follow Me, 2003')]
      },
      {
        title: 'Competition', cluster: 'education / examination / crowd tableau', period: '2004',
        summary: '把考试 / 竞争制度放大为大型群体画面。每个人在同一制度空间内被安排位置，观众一次性看到集体压力的视觉结构。',
        actions: ['把教育竞争转成可拍的舞台规则', '制作大型教室 / 训练场式布景', '招募大量演员', '统一安排桌椅 / 服装 / 动作', '使用高视点确保群体结构可读', '以单张大尺幅图压缩事件时间'],
        sourceUrl: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide', images: [], relations: []
      },
      {
        title: 'Dream of Migrants', cluster: 'migration / urban aspiration / ensemble staging', period: '2005',
        summary: '围绕城乡迁移和“进入现代城市”的欲望组织人物、消费品和生活物件。个人故事被转译成一张集体社会舞台。',
        actions: ['围绕迁移议题列出典型身份 / 物件', '设计群体位置和画面动线', '组织演员与服装', '在大场地集中拍摄', '把城市欲望依靠物件堆积呈现', '减少后期合成对主体结构的依赖'],
        sourceUrl: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide', images: [], relations: []
      },
      {
        title: 'Film-director production model', cluster: 'meta-method / massive set / actors / one photograph', period: '2000s–现在',
        summary: 'ICP 将他的工作方式直接描述为“像电影导演”：几十位模特、巨大舞台和完整道具系统，但最终很多项目凝固成一张照片。制作过程本身已经接近电影工业。',
        actions: ['从社会新闻 / 生活观察提炼主题', '绘制 / 规划整体 tableau', '搭建大型真实布景', '招募并管理几十名演员', '分组排练姿势和动作', '使用大画幅或高分辨率设备', '在极少数最终图像中压缩大量制作劳动'],
        sourceUrl: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide', images: [], relations: [rel('展览', 'When Worlds Collide — ICP New York', '2011')]
      },
      {
        title: 'Whom to Follow', cluster: 'retrospective staging / learning / public ritual', period: '2025',
        summary: '近年的大型个展继续围绕工作、学习、娱乐与公共集会的社会仪式，重新激活旧作品并展示其长期“社会剧场”结构。',
        actions: ['从近三十年大型作品中重新选择', '按学习 / 工作 / 集会等社会行为分组', '把摄影与视频并置', '通过展览空间显示不同年代的制作规模变化', '让旧作与当代教育 / 平台文化继续产生关系'],
        sourceUrl: 'https://www.wangqingsong.com/3323/whom-to-follow-2025-exhibition/', images: [], relations: [rel('展览', 'Whom to Follow', '2025')]
      }
    ],
    awards: [],
    exhibitions: ['When Worlds Collide — ICP 2011', 'Whom to Follow — 2025'],
    sources: [
      { label: 'Wang Qingsong Studio', url: 'https://www.wangqingsong.com/' },
      { label: 'ICP — When Worlds Collide', url: 'https://www.icp.org/exhibitions/wang-qingsong-when-worlds-collide' },
      { label: 'Mori Art Museum — Follow Me', url: 'https://www.mori.art.museum/en/collection/2330/index.html' }
    ]
  },

  'hassan-hajjaj': {
    artistId: 'hassan-hajjaj',
    projectCoverage: '6 个街头肖像 / 时尚 / 定制框架 / 影像节点已建立深档案 · 1990s–现在',
    imageCoverage: '0 / 6 项目已有代表图像',
    note: 'Hajjaj 的高饱和并不是把照片套“摩洛哥滤镜”。他长期自己做衣服、找市场材料、搭临时街头摄影棚、给朋友造型，再用饮料罐、包装和印刷品制作实体画框。照片、服装、家具和框是同一套作品系统。',
    projects: [
      {
        title: 'Kesh Angels', cluster: 'Marrakech biker women / fashion / trust / staged portrait', period: 'late-1990s–2010s',
        summary: '从 Marrakech 摩托车文化出发，邀请现实中骑摩托的女性朋友参与。她们并非虚构角色：Hajjaj 先观察真实 body language，再在服装、眼镜、袜子和摆姿上增加自己的设计。',
        actions: ['长期观察 Marrakech 摩托车 / scooter 日常', '邀请认识的女性骑手合作', '基于真实骑行姿势安排身体', '混合人物自己的服装和艺术家设计服装', '加入夸张眼镜 / 图案 / 配件', '在街道或综合色背景进行时尚式肖像拍摄', '让人物保持直接、强势凝视'],
        sourceUrl: 'https://agakhanmuseum.org/explore-at-home/listen/this-being-human-hassan-hajjaj/', images: [], relations: [rel('展览', 'Kesh Angels — Rose Issa Projects', '2010'), rel('展览', 'Kesh Angels — New York', '2014')]
      },
      {
        title: 'Custom clothing / street-fashion production', cluster: 'fashion design / appropriation / North African street style', period: '1990s–现在',
        summary: '他并不只是给现成人物“拍时尚”。很多 kaftan、帽子、鞋、品牌挪用图案和综合色服装由他自己设计 / 改造，使摄影前的服装生产已经是作品的一部分。',
        actions: ['从 Morocco / London 市场搜集布料与品牌包装', '把全球品牌 logo 转成 arabe / street visual joke', '设计 kaftan、帽子、鞋与 accessories', '根据具体人物重新造型', '让服装与背景图案故意互相竞争'],
        sourceUrl: 'https://www.thethirdline.com/artists/35-hassan-hajjaj/', images: [], relations: []
      },
      {
        title: 'Consumer-package frames', cluster: 'frame / cans / branding / object-photograph', period: '2000s–现在',
        summary: '他的画框不是中性保护物：汽水罐、包装标签、火柴盒式图案等直接包围肖像，把消费文化推到“照片外面”。',
        actions: ['收集本地饮料罐 / 包装材料', '按照综合色重复图案设计框体', '将真实罐体 / 商品视觉嵌入木框', '让框色与人物服装 / 背景发生对应', '把一张平面肖像转换成具有厚度的 object'],
        sourceUrl: 'https://www.roseissaprojects.com/gallery-individual/2010---rose-issa-projects-at-menase-art-fair%2C-beirut', images: [], relations: []
      },
      {
        title: 'My Rockstars', cluster: 'musicians / artists / pop-up studio / global portrait network', period: '2000–现在',
        summary: '从2000年前后持续拍音乐人、艺术家和朋友。他会在 London、Marrakech、Dubai、Kuwait、Paris 等地用纺织物和塑料垫搭临时 pop-up studio，让不同国家人物进入同一视觉系统。',
        actions: ['从真实社交 / 音乐网络邀请被摄者', '携带可移动纺织 / 塑料背景', '现场搭建临时摄影棚', '为人物设计 / 搭配服装', '允许人物以自身表演身份进入镜头', '用重复正面 / 坐姿 / 全身构图建立系列', '制作摄影 + video / performance 版本'],
        sourceUrl: 'https://yossimilo.com/usr/documents/exhibitions/press_release_url/23/hassan-hajjaj_2021-my-rockstars-press-release.pdf', images: [], relations: [rel('展览', 'My Rockstars — LACMA / The Third Line and others', '2010s'), rel('展览', 'My Rockstars — Yossi Milo New York', '2021')]
      },
      {
        title: 'Riad Yima / furniture / total environment', cluster: 'interior / furniture / shop-gallery / lived installation', period: '2000s–现在',
        summary: 'Hajjaj 的综合色系统进一步进入家具、室内、店铺和社交空间。照片不再是墙上孤立图像，而和坐垫、塑料箱、织物、商品陈列共同形成日常可使用环境。',
        actions: ['把市场塑料箱 / 地毯 / 图案材料转为家具', '将肖像与综合色室内并置', '把商业空间、社交空间与艺术展示混合', '让观众坐 / 使用作品相关家具', '以生活空间延伸肖像的综合色文化语境'],
        sourceUrl: 'https://www.thethirdline.com/artists/35-hassan-hajjaj/', images: [], relations: []
      },
      {
        title: 'Portrait as collaboration, not exotic display', cluster: 'meta-method / diaspora / style / agency', period: '1990s–现在',
        summary: '他的对象多来自朋友、音乐与街头网络，而非被当作“摩洛哥类型”搜集。造型虽然高度人工，但人物通常主动表演自身身份，综合色的控制权不是单向的。',
        actions: ['从长期社交关系寻找人物', '在拍摄前讨论服装和自我呈现', '让被摄者带入自己的动作 / 音乐 / 职业身份', '艺术家提供背景、服装与框架系统', '保持人物直视镜头的主体性', '避免把传统服装当静态民族志符号'],
        sourceUrl: 'https://agakhanmuseum.org/bio/hassan-hajjaj/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Kesh Angels — Rose Issa Projects 2010 / New York 2014', 'My Rock Stars — LACMA / Wexner / Yossi Milo', 'Carte Blanche — MEP Paris 2019', 'VOGUE, The Arab Issue — Fotografiska 2020–2021'],
    sources: [
      { label: 'The Third Line — Hassan Hajjaj', url: 'https://www.thethirdline.com/artists/35-hassan-hajjaj/' },
      { label: 'Aga Khan Museum — Hassan Hajjaj', url: 'https://agakhanmuseum.org/bio/hassan-hajjaj/' },
      { label: 'Aga Khan Museum — Kesh Angels interview', url: 'https://agakhanmuseum.org/explore-at-home/listen/this-being-human-hassan-hajjaj/' },
      { label: 'Yossi Milo — My Rockstars', url: 'https://yossimilo.com/usr/documents/exhibitions/press_release_url/23/hassan-hajjaj_2021-my-rockstars-press-release.pdf' }
    ]
  }
};
