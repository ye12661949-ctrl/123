import type { ArtistArchive } from './archiveData';

export const archiveBatch59: Record<string, ArtistArchive> = {
  'sophie-ristelhueber': {
    artistId: 'sophie-ristelhueber',
    projectCoverage: '5 个核心项目 / 方法节点已建立深档案',
    imageCoverage: '以 Centre Pompidou / MoMA 馆藏资料为主；不稳定外链不强行补图',
    note: '她的核心不是“战争摄影”，而是战争、创伤和修补如何留下可被观看的表面。档案按地表、身体、建筑和阻断道路之间的形式关系来拆，而不是按新闻事件排列。',
    projects: [
      {
        title: 'Beyrouth', cluster: '战后建筑 / 废墟 / 表面', period: '1984',
        summary: '在贝鲁特内战后的城市内部拍摄受损建筑，让战争通过墙体、洞口、瓦砾和被破坏的室内结构出现，而不是通过战斗瞬间。',
        actions: ['进入战后建筑内部', '寻找墙面、房间和结构上的破坏痕迹', '避免把人物冲突作为画面中心', '用空间连续性建立系列', '把建筑表面当成承载历史的“皮肤”'],
        sourceUrl: 'https://www.moma.org/artists/72944-sophie-ristelhueber', images: [], relations: []
      },
      {
        title: 'Fait', cluster: '海湾战争 / 航拍 + 地面 / 战场地表', period: '1991–1992',
        summary: '海湾战争结束后进入科威特，从空中和地面记录壕沟、坦克轨迹、弹坑、燃烧油井与散落残骸；大幅网格式安装让战场先像抽象地景，再逐渐暴露其暴力来源。',
        actions: ['在战争结束后进入科威特沙漠', '同时进行航空与地面拍摄', '记录壕沟、车辙、弹坑和残骸', '混合彩色与黑白图像', '将照片放大至约 100 × 130 cm', '以大面积网格重构战场的连续表面'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/c6b9n4o', images: [],
        relations: [{ kind: '收藏', label: 'Centre Pompidou', detail: '多件 Fait 1992 藏品' }, { kind: '展览', label: 'New Photography 12 — MoMA', detail: '1996–1997' }]
      },
      {
        title: 'Every One', cluster: '手术伤痕 / 身体地景 / 巨幅摄影', period: '1994',
        summary: '在巴黎医院近距离拍摄手术后仍留有缝线的身体局部，再把匿名伤口放大到巨幅，使皮肤像土地、建筑或战后的地表。',
        actions: ['在医院寻找手术后身体局部', '近距离裁切伤疤和缝线', '避免给出可识别人物叙事', '制作超大银盐照片', '把背部、脸部等身体表面组织成系列', '同时出版小尺寸透明纸艺术家书，让文字与伤口图像重叠'],
        sourceUrl: 'https://www.centrepompidou.fr/fr/ressources/oeuvre/c6rgxMd', images: [],
        relations: [{ kind: '收藏', label: 'Centre Pompidou', detail: 'Every One #8, 1994 · unique gelatin-silver print' }]
      },
      {
        title: 'The Edge of Awareness', cluster: '创伤痕迹 / 观看距离 / 单幅巨像', period: '1996 / 2020',
        summary: '继续把身体或地表上的痕迹推向不可立即辨认的尺度，使观众先读取纹理与形状，再意识到其中的社会与暴力背景。',
        actions: ['从既有痕迹语言中选择局部', '通过放大削弱直接叙事', '保持彩色摄影的物质细节', '让作品在远观与近看之间产生信息反转'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/jGOfSj4', images: [],
        relations: [{ kind: '收藏', label: 'Centre Pompidou', detail: '1996 / 2020 chromogenic print, 128 × 150 cm' }]
      },
      {
        title: 'WB', cluster: 'West Bank / 阻断道路 / 地景政治', period: '2005',
        summary: '在约旦河西岸拍摄被土堆、石块和人工障碍截断的道路；道路仍像道路，却不再通往目的地，领土分割直接表现为基础设施失效。',
        actions: ['在西岸寻找被阻断的道路', '将障碍本身放在景观结构中而非拍摄冲突现场', '统一使用大尺幅彩色输出', '让道路的透视线指向被阻断的远方', '以多张系列比较不同形式的封堵'],
        sourceUrl: 'https://www.centrepompidou.fr/en/ressources/oeuvre/cyjne66', images: [],
        relations: [{ kind: '收藏', label: 'Centre Pompidou', detail: 'WB #7 / #11 / #43, 2005' }]
      }
    ],
    awards: ['Deutsche Börse Photography Prize 2010 — Winner'],
    exhibitions: ['New Photography 12 — MoMA, 1996–1997', 'Theater of Operations: The Gulf Wars 1991–2011 — MoMA PS1, 2019–2020'],
    sources: [
      { label: 'Centre Pompidou — Sophie Ristelhueber', url: 'https://www.centrepompidou.fr/en/ressources/personne/cAnpx9g' },
      { label: 'MoMA — Sophie Ristelhueber', url: 'https://www.moma.org/artists/72944-sophie-ristelhueber' }
    ]
  },

  'clare-strand': {
    artistId: 'clare-strand',
    projectCoverage: '8 个项目 / 机器与传输节点已建立深档案',
    imageCoverage: '艺术家官网资料非常完整；优先链接官方项目页，图像直链不稳定时留空',
    note: 'Strand 的重点不是“档案图片很怪”，而是不断设计机器、规则和转译协议让图像丢失、磨损、随机出现或被错误重建。每个项目都记录输入图像、转换机制与输出结果。',
    projects: [
      {
        title: 'Gone Astray Details / Portraits', cluster: '工作室肖像 / 巨型道具 / 维多利亚视觉语法', period: '2001–2003',
        summary: '让人物与尺寸异常的城市物件、道具共同进入黑白工作室肖像，借早期摄影棚的分类语言制造一种既熟悉又失常的社会角色。',
        actions: ['寻找或制作尺寸异常的日常物件', '邀请人物进入工作室', '将人物与道具正面组织', '使用黑白摄影统一不同角色', '通过系列重复建立近似档案的观看方式'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/', images: [], relations: []
      },
      {
        title: 'Unseen Agents / Photisms', cluster: 'Aura Polaroid / 再摄影 / 灵异摄影史', period: '2003–2004',
        summary: '邀请六名女孩在 New Age 商店用 aura camera 获得彩色 Polaroid，再把这些廉价灵气照片重新拍成正式的大尺幅黑白作品。',
        actions: ['邀请六名女孩接受 aura camera 拍摄', '支付并取得即时彩色 Polaroid', '研究摄影史中的灵异影像和年轻女性角色', '把 Polaroid 重新摄影', '去掉原有诱惑性色彩并放大为黑白作品'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/?id=105', images: [], relations: []
      },
      {
        title: 'The Ragpicker’s Tower / Control in Book Form', cluster: '研究档案 / 图像堆积 / 规则编辑', period: '2012–2013',
        summary: '把多年积累的研究图像从“参考资料”推到作品前台，通过堆积、分类、出版和翻动让私人视觉数据库本身成为作品。',
        actions: ['长期收集新闻、科学、魔术和技术图像', '从档案中按规则抽取', '把研究图像做成可翻动 / 可堆积的物质结构', '在书和展览之间重新编排'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/', images: [], relations: []
      },
      {
        title: 'Control in Motion', cluster: 'mutoscope / 灰阶 / 机械磨损', period: '2013–2015',
        summary: '制作类似早期电影 mutoscope 的旋转装置，让 100 张从黑到白的灰阶卡片持续翻转；机械使用本身逐渐磨损纸面。',
        actions: ['制作 100 张连续灰阶卡片', '装入圆形 mutoscope 结构', '让装置持续旋转', '把正常使用造成的微小损耗保留下来', '用时间而非单次曝光生成变化'],
        sourceUrl: 'https://clarestrand.co.uk/file_uploads/fck-files/Clare%20Strand%20Press%20Release.pdf', images: [], relations: []
      },
      {
        title: 'The Happenstance Generator', cluster: '随机机器 / 图像档案 / 风力', period: '2015',
        summary: '把三十年研究图片放进透明 Perspex 室，由隐藏风扇随机吹动；某张图片偶然贴近透明面片刻后又消失。',
        actions: ['从长期研究档案中选择纸质图像', '把图像投入透明机械箱体', '安装隐藏风扇', '用气流而非策展人决定哪张图短暂可见', '让图像持续重新排列'],
        sourceUrl: 'https://clarestrand.co.uk/file_uploads/fck-files/Clare%20Strand%20Press%20Release.pdf', images: [], relations: []
      },
      {
        title: 'The Entropy Pendulum and OutPut', cluster: '机械擦除 / 图像降解 / 时间', period: '2015',
        summary: '每天把一张档案照片放到摆锤下，摆锤的磨蚀重量持续擦过照片，一天结束后将被磨损的图像取下装框；35 张照片依次完成。',
        actions: ['从档案中准备 35 张照片', '把单张照片放到持续摆动的装置下', '让摩擦在一天内逐步抹去图像', '由展方决定当天结束时刻', '取下磨损图像并放入墙上的空框', '重复直到 35 个框全部被填满'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/?id=317', images: [], relations: []
      },
      {
        title: 'The Discrete Channel with Noise', cluster: '电话编码 / 人工传真 / 绘画输出', period: '2017–2018',
        summary: '把照片切成 49 × 60 网格，每格用 1–10 表示从白到黑的灰度；丈夫在英国通过电话逐格读数字，Strand 在巴黎按数字把图像重新画出来。',
        actions: ['从档案中选择源照片', '将 10 × 8 英寸图像划分为 49 × 60 网格', '给每格指定 1–10 灰度值', '通过跨英吉利海峡电话逐格口述代码', '在巴黎用 10 档灰色颜料按指令绘制', '保留通信错误、疲劳和数据损失', '最终又通过摄影复制这些绘画，使媒介循环'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/?id=391', images: [], relations: []
      },
      {
        title: 'Screened / recent image-conversion works', cluster: '摄影 → 其他媒介 / 转译', period: '2024–2025',
        summary: '近期作品继续把已有照片送入遮挡、屏幕化、物质转换与重新输出的链条，延续“图像每移动一次就会改变”的长期方法。',
        actions: ['调用既有摄影 / 研究档案', '设定新的图像转换规则', '让物理材料或遮挡改变可读性', '把过程结果作为最终图像而非修复回原始信息'],
        sourceUrl: 'https://www.clarestrand.co.uk/works/', images: [], relations: []
      }
    ],
    awards: [],
    exhibitions: ['Getting Better and Worse at the Same Time — Grimaldi Gavin, 2015', 'The Discrete Channel with Noise — multiple institutional presentations', 'Screened — Burg Lede, 2025'],
    sources: [
      { label: 'Clare Strand — official works archive', url: 'https://www.clarestrand.co.uk/works/' },
      { label: 'Getting Better and Worse at the Same Time — press release', url: 'https://clarestrand.co.uk/file_uploads/fck-files/Clare%20Strand%20Press%20Release.pdf' }
    ]
  },

  'alison-rossiter': {
    artistId: 'alison-rossiter',
    projectCoverage: '7 个材料 / 暗房处理节点已建立深档案',
    imageCoverage: 'Yossi Milo 对工艺记录完整；重点记录纸张来源、显影方式和编排，而非追求每件单作图片',
    note: 'Rossiter 的作品必须区分两类动作：一类只是把老相纸已有的氧化、霉斑、漏光等“显现”出来；另一类是她主动用浸泡、倾倒、局部显影去组织几何形。这里把两者分开记录。',
    projects: [
      {
        title: 'Expired Paper archive', cluster: '过期相纸 / 材料收集 / 摄影工业史', period: '2007–',
        summary: '从偶然获得一盒 1946 年过期 Kodak 相纸开始，持续在 eBay 等渠道收集十九、二十世纪未使用相纸，并把包装、品牌和有效期一起当成历史档案。',
        actions: ['搜集未使用的过期摄影纸', '保留原包装和厂牌信息', '记录有效期与纸张尺寸', '先取小样测试材料反应', '部分纸张保留未处理样本供未来比较', '建立超过两千包材料的长期档案'],
        sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [], relations: []
      },
      {
        title: 'Latent / Tarnish', cluster: '完整显影 / 潜在痕迹 / 时间', period: '2007–',
        summary: '不经过相机曝光，直接在暗房处理整张老相纸，让数十年储存中形成的氧化、污染、指纹、漏光和霉变自己显现。',
        actions: ['在暗房拆开历史相纸', '不使用相机或底片', '整张放入显影 / 定影流程', '不修掉材料已有的污迹和乳剂变化', '用纸张品牌、有效期和处理年份命名'],
        sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [], relations: []
      },
      {
        title: 'Pools', cluster: '倾倒显影液 / 液体边界 / 抽象', period: '2010s–',
        summary: '把液体显影剂直接倒在相纸表面，让液体自然扩散形成云状、不规则边界；这里图形来自艺术家的动作与材料反应共同完成。',
        actions: ['选择具体历史相纸', '将纸张水平放置', '直接倾倒或汇集显影液', '让显影液自然扩散', '在适当时间停止反应并定影', '保留每张纸独特的化学差异'],
        sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [], relations: []
      },
      {
        title: 'Fours', cluster: '多角度浸泡 / 四联组 / 几何体积', period: '2015',
        summary: '使用 24 × 20 英寸 Dupont Defender Varigam 老相纸，从多个角度局部浸入显影液，再把四张纸组合成大型构成。',
        actions: ['选择同批大型过期相纸', '从不同方向和角度浸入显影液', '用浸入深度控制显影区域', '让黑、棕、白等色调自然出现', '四张一组拼成更大的几何结构'],
        sourceUrl: 'https://yossimilo.com/exhibitions/60-alison-rossiter-paper-wait/press_release_text/', images: [],
        relations: [{ kind: '展览', label: 'Paper Wait — Yossi Milo', detail: '2015' }]
      },
      {
        title: 'Density', cluster: '材料年代 / 完整显影 / 编年组合', period: '2018–2020',
        summary: '从档案中挑选最稀有、时间反应最明显的纸张，将同一包装内不同氧化程度的纸并置，使“储存了多久、处于包装什么位置”变成画面结构。',
        actions: ['从材料档案按年代与稀有度筛选', '完整或控制性处理纸张', '比较同一包装不同纸张的氧化程度', '按历史年代组织多张组合', '让有效期进入作品标题'],
        sourceUrl: 'https://yossimilo.com/exhibitions/26-alison-rossiter-substance-of-density-1918-1948/press_release_text/', images: [],
        relations: [{ kind: '展览', label: 'Substance of Density 1918–1948 — Yossi Milo', detail: '2020' }]
      },
      {
        title: 'Expired Paper — monograph structure', cluster: '摄影书 / 材料分类 / 包装档案', period: '2017',
        summary: '首本专著把作品分为 Latent、Tarnish、Landscapes、Pools、Dips + Pours、Quads 六个部分，并额外加入老相纸包装册，使“材料分类”本身成为书的结构。',
        actions: ['跨多年作品重新分类', '按处理方式而非纯时间顺序分章节', '选择 90 张作品图', '把旧相纸包装作为独立小册子', '让摄影工业史和抽象图像并排出现'],
        sourceUrl: 'https://yossimilo.com/store/publications/7-expired-paper/', images: [],
        relations: [{ kind: '出版', label: 'Expired Paper — Radius Books / Yossi Milo', detail: '2017' }]
      },
      {
        title: 'Semblance / recent grid works', cluster: '网格 / 相邻色阶 / 历史纸张', period: '2025–2026',
        summary: '近期继续把不同历史相纸的色阶、边缘氧化和潜在痕迹以网格并置，让近似极简抽象的形式暴露其真实材料年代。',
        actions: ['从档案选择相邻年代或相关纸张', '显影并保留自然化学差异', '按色阶与表面关系排列', '用网格加强比较而不是制造单幅叙事'],
        sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/', images: [], relations: []
      }
    ],
    awards: [], exhibitions: ['Reduction — Yossi Milo, 2010', 'Paper Wait — Yossi Milo, 2015', 'Substance of Density 1918–1948 — Yossi Milo, 2020'],
    sources: [{ label: 'Yossi Milo — Alison Rossiter biography', url: 'https://yossimilo.com/artists/30-alison-rossiter/biography/' }, { label: 'Paper Wait', url: 'https://yossimilo.com/exhibitions/60-alison-rossiter-paper-wait/press_release_text/' }]
  },

  'marco-breuer': {
    artistId: 'marco-breuer',
    projectCoverage: '7 个材料动作 / 展览节点已建立深档案',
    imageCoverage: 'Yossi Milo 工艺条目可核到具体材料动作；这里优先写“工具如何留下痕迹”',
    note: 'Breuer 的作品几乎可以反向从成像结果推回工具动作：点燃导火索、热风枪、刮刀、砂纸、折痕、压印、电动工具。不要把它泛化成“抽象摄影”，摄影纸本身就是动作发生的场地。',
    projects: [
      {
        title: 'Early cameraless recordings', cluster: '无相机 / photogram / 直接痕迹', period: '1990s–',
        summary: '从早期黑白相纸实验开始，绕开相机与底片，把光、热、摩擦和物体直接作用到感光材料上。',
        actions: ['在暗房直接处理银盐相纸', '把物体或光源直接作用于纸面', '不用传统负片生成图像', '将每次实验保留为独版', '根据结果反复调整工具与动作'],
        sourceUrl: 'https://yossimilo.com/exhibitions/63-marco-breuer-zero-base/press_release_text/', images: [], relations: []
      },
      {
        title: 'Untitled (Fuse)', cluster: '导火索 / 燃烧 / 银盐相纸', period: '1995',
        summary: '把燃烧的 fuse 直接作为成像工具，热量、火焰与残留物在银盐纸上留下不可重复的轨迹。',
        actions: ['将导火索放置于感光纸附近或表面', '点燃并让热作用于乳剂', '控制但不完全消除燃烧的偶然性', '停止反应并保留烧灼痕迹'],
        sourceUrl: 'https://yossimilo.com/artworks/11627-marco-breuer-untitled-fuse-1995/', images: [], relations: []
      },
      {
        title: 'Burn / Heat-Gun works', cluster: '热 / 银盐纸 / 直接灼烧', period: '1999–2001',
        summary: '使用点燃的纱布、热风枪或其他热源直接改变相纸乳剂；火不仅制造影像，也实际改变纸张物质。',
        actions: ['选择银盐相纸', '覆盖纱布或使用热源', '点燃 / 加热材料', '让热和烟改变乳剂层', '保留烧焦、模糊与织物痕迹'],
        sourceUrl: 'https://yossimilo.com/artworks/11618-marco-breuer-untitled-heat-gun-6-2001/', images: [], relations: []
      },
      {
        title: 'Tool-based surface actions', cluster: '刮擦 / 打磨 / 工具 / 摄影纸', period: '2000s–',
        summary: '把 razor blade、power sander、modified turntable、flash bulb 甚至 shotgun 等不同工具当成摄影装置，让每种工具产生自己的痕迹语法。',
        actions: ['为每件作品选择具体工具', '直接划伤、打磨或冲击乳剂', '比较手工动作与机械运动的差异', '逐层处理并不断重新评估纸面', '让工具的物理作用替代传统曝光内容'],
        sourceUrl: 'https://yossimilo.com/exhibitions/63-marco-breuer-zero-base/press_release_text/', images: [], relations: []
      },
      {
        title: 'Zero Base', cluster: '折叠 / 燃烧 / 刮擦 / 层层减材', period: '2014',
        summary: '把 folding、burning、scratching、sanding、scraping 反复叠加到 chromogenic paper 上；作品经过数日不断被破坏又重新形成，直到露出纸张基底。',
        actions: ['折叠彩色相纸制造结构线', '烧灼局部区域', '刮擦与砂磨乳剂', '多日反复加工同一张纸', '每增加一层破坏就重新判断构图', '保留原始纸基裸露部分作为最终画面'],
        sourceUrl: 'https://yossimilo.com/exhibitions/63-marco-breuer-zero-base/press_release_text/', images: [],
        relations: [{ kind: '展览', label: 'Zero Base — Yossi Milo', detail: '2014' }, { kind: '出版', label: 'Marco Breuer: Col•or', detail: '2014' }]
      },
      {
        title: 'Silent Speed', cluster: '减材图形 / 多格式变体 / 身体转译', period: '2016',
        summary: '将自由曲线在彩色摄影纸、Polaroid、拼贴、双页研究和报纸之间反复迁移；图形通过刮除乳剂形成，后来艺术家又用自己的身体模仿这些抽象形状。',
        actions: ['通过刮除乳剂寻找形状', '在不同纸张与尺寸上重复同一 motif', '制作 Polaroid 序列与小型拼贴', '把过程变体收入 vitrines 中', '在相机前用身体重演抽象形态', '把身体序列出版成 16 页黑白报纸'],
        sourceUrl: 'https://yossimilo.com/exhibitions/50-marco-breuer-silent-speed/press_release_text/', images: [],
        relations: [{ kind: '展览', label: 'Silent Speed — Yossi Milo', detail: '2016' }]
      },
      {
        title: 'Untitled (C-1834)', cluster: '曝光 / 压印 / 刮擦 / 彩色相纸', period: '2016',
        summary: '一件可清楚核验工艺链的独版：chromogenic paper 被 exposed、embossed、scraped、scratched，多种动作共同构成最终表面。',
        actions: ['对彩色相纸曝光', '对纸面进行压印', '刮除部分乳剂', '继续划伤形成细线', '保留多层动作在同一表面上的时间顺序'],
        sourceUrl: 'https://yossimilo.com/artworks/16002-marco-breuer-untitled-c-1834-2016/', images: [], relations: []
      }
    ],
    awards: ['Larry Sultan Photography Award — inaugural recipient'],
    exhibitions: ['New Pictures 2: Marco Breuer — Minneapolis Institute of Arts, 2010', 'Line of Sight — de Young Museum, 2011', 'Zero Base — Yossi Milo, 2014', 'Light, Paper, Process — J. Paul Getty Museum, 2015', 'Silent Speed — Yossi Milo, 2016'],
    sources: [{ label: 'Yossi Milo — Zero Base', url: 'https://yossimilo.com/exhibitions/63-marco-breuer-zero-base/press_release_text/' }, { label: 'Yossi Milo — Silent Speed', url: 'https://yossimilo.com/exhibitions/50-marco-breuer-silent-speed/press_release_text/' }]
  }
};
