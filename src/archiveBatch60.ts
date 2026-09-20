import type { ArtistArchive } from './archiveData';

export const archiveBatch60: Record<string, ArtistArchive> = {
  'amalia-ulman': {
    artistId: 'amalia-ulman',
    projectCoverage: '5 个平台表演 / 电影节点已建立深档案',
    imageCoverage: '优先使用 New Museum 数字档案、艺术家项目站与 Film at Lincoln Center；社交平台旧帖不依赖易失直链',
    note: 'Ulman 的“自拍”不是图像风格，而是脚本、发布时间、评论区、媒体报道、消费物和身份预期共同组成的表演系统。档案重点记录她怎样把平台与宣传机制本身变成作品材料。',
    projects: [
      {
        title: 'Excellences & Perfections — scripted identity arc', cluster: 'Instagram / Facebook / 脚本人格', period: '2014',
        summary: '用自己的 Instagram 和 Facebook 连续约五个月执行一个半虚构女性人格剧本；观众最初并不知道这是艺术表演。',
        actions: ['先写出人格变化和叙事阶段', '把账号本身作为主要展场', '定时发布自拍、商品、食物和生活方式图片', '在造型、妆发、姿势和消费品之间维持角色连续性', '阅读并允许真实粉丝评论进入作品现场', '直到项目结束后才明确揭示其表演性质'],
        sourceUrl: 'https://archive.newmuseum.org/exhibitions/2487', images: [],
        relations: [{ kind: '展览', label: 'First Look — New Museum digital presentation', detail: '2014' }]
      },
      {
        title: 'Excellences & Perfections — makeover fabrication', cluster: '身体图像 / Photoshop / 真实性表演', period: '2014',
        summary: '项目中的“极端改造”并不全部真实发生：例如以医院服、胸部绷带、加垫胸罩和 Photoshop 制造隆胸叙事，让平台照片承担假证据功能。',
        actions: ['研究网络 makeover 叙事模板', '购买和布置医院 / 美容视觉道具', '使用加垫衣物改变身体轮廓', '用 Photoshop 加强虚构身体变化', '将不同程度的真实和伪造混入同一 feed', '依靠观众既有平台阅读习惯维持可信度'],
        sourceUrl: 'https://archive.newmuseum.org/exhibitions/2487', images: [], relations: []
      },
      {
        title: 'Privilege', cluster: '办公室 / Instagram / 自我漫画化', period: '2015–2016',
        summary: '从上一项目的生活方式角色转向办公室、职业女性、权力姿态和鸽子等重复元素，把 Instagram feed 组织得像一部一人主演的办公室电影。',
        actions: ['把工作室改造成办公室式场景', '建立职业女性版本的艺术家人格', '反复使用电梯门、办公家具、衣服和鸽子等 motif', '拍摄照片、短视频、漫画和声音片段', '持续发布到社交媒体', '把媒体采访与时尚拍摄也重新吸收到 performance feed 中'],
        sourceUrl: 'https://privilege.amaliaulman.eu/press.html', images: [], relations: []
      },
      {
        title: 'Reputation', cluster: '线下展览 / 办公室重建 / 平台道具归档', period: '2016',
        summary: '把 Privilege 期间形成的办公室角色、衣服、宣传物、脚本和鸽子元素搬进实体展览，使在线人格的“幕后材料”变成空间档案。',
        actions: ['重建 Bob’s Office 等办公室环境', '陈列 Privilege 中穿过的衬衫和道具', '加入政党宣传气球、扇子、盘子等消费 / 政治物', '展示脚本与角色物件', '把城市声音和广播加入空间', '让线上 feed 的素材在展厅成为可步入的布景'],
        sourceUrl: 'https://privilege.amaliaulman.eu/reputation.html', images: [],
        relations: [{ kind: '展览', label: 'Reputation — New Galerie, Paris', detail: '2016' }]
      },
      {
        title: 'El Planeta', cluster: '长片 / 母女共同表演 / 阶级', period: '2021',
        summary: '转向 80 分钟黑白长片，艺术家担任编剧、导演和主演，并让现实中的母亲 Ale Ulman 饰演片中母亲；两人以“维持体面生活的表演”处理经济困境和驱逐危机。',
        actions: ['编写以经济拮据母女为中心的长片剧本', '邀请现实母亲共同主演', '在西班牙 Gijón 实景拍摄', '使用黑白电影摄影统一现实城市与虚构角色', '将购物、吃饭、交易和低成本生存动作写入剧情', '通过剪辑把日常表演推进为阶级和身份问题'],
        sourceUrl: 'https://www.filmlinc.org/films/el-planeta/', images: [],
        relations: [{ kind: '展览', label: 'New Directors/New Films — Opening Night', detail: 'MoMA / Film at Lincoln Center, 2021' }]
      }
    ],
    awards: ['El Planeta — Best Director, BAFICI International Competition'],
    exhibitions: ['Excellences & Perfections — New Museum digital archive, 2014', 'Privilege / related presentations, 2016', 'Reputation — New Galerie, 2016', 'El Planeta — New Directors/New Films, 2021'],
    sources: [{ label: 'New Museum — Excellences & Perfections', url: 'https://archive.newmuseum.org/exhibitions/2487' }, { label: 'Privilege project archive', url: 'https://privilege.amaliaulman.eu/press.html' }, { label: 'Film at Lincoln Center — El Planeta', url: 'https://www.filmlinc.org/films/el-planeta/' }]
  },

  'roe-ethridge': {
    artistId: 'roe-ethridge',
    projectCoverage: '7 个编辑 / 图像流通节点已建立深档案',
    imageCoverage: 'MoMA 有大量单作与 2010 New Photography 资料；摄影书节点以出版社 / 画廊出版记录为主',
    note: 'Ethridge 的核心不是“商业摄影看起来像艺术”。真正方法是允许委托照、废片、家庭照、网站截图和新拍作品反复进入不同语境，再靠 sequence 而非统一风格把它们编成视觉赋格。',
    projects: [
      {
        title: 'Editorial mode / commercial outtakes', cluster: '商业委托 / 废片 / 再语境化', period: '2000s–',
        summary: '在时尚与杂志工作中大量拍摄，同时保留已经发表、未采用和拍摄现场产生的图像，把这些材料再次用于个人展览和书籍。',
        actions: ['执行商业 / editorial 拍摄', '保留客户未选中的 outtakes', '保留已经在杂志流通过的图像', '把私人和委托图放进同一档案', '在后续艺术项目中重新抽取和排序', '不隐藏图像曾经的商业功能'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2010/newphotography/roe-ethridge/', images: [], relations: []
      },
      {
        title: 'Rockaway / Orange Grove / early book logic', cluster: '地方 / 私人 / 商业图像混编', period: '2004–2008',
        summary: '早期出版与展览已经把地景、家庭线索、静物和商业式图像并置，建立“来源不同但在 sequence 中互相改变含义”的编辑方法。',
        actions: ['在特定地点进行日常拍摄', '调用家庭与既有档案图像', '把商业清晰度用于普通景物', '将来源差异很大的图片放入同一书 / 展览顺序', '依靠相邻图片关系产生新叙事'],
        sourceUrl: 'https://www.andrewkreps.com/publications/c/roe-ethridge', images: [], relations: []
      },
      {
        title: 'New Photography 2010 — visual fugue', cluster: '网络抓图 / 商业废片 / 非线性 sequence', period: '2010',
        summary: 'MoMA 展览清楚展示其“editorial mode”：网站商品图、时装拍摄、舞者、发霉水果、T 台截图和工作室杂物被重新组合，不再服从原来的商业用途。',
        actions: ['从自己的商业档案抽取图像', '直接借用已在网络 / 报纸流通的图', '把 Bed Bath & Beyond 商品图等数字图像叠入新构图', '并置模特、静物、网络图与私人图', '以非线性顺序替代传统系列一致性'],
        sourceUrl: 'https://www.moma.org/interactives/exhibitions/2010/newphotography/roe-ethridge/', images: [],
        relations: [{ kind: '展览', label: 'New Photography 2010 — MoMA', detail: '2010–2011 · curator Roxana Marcoci' }]
      },
      {
        title: 'Le Luxe', cluster: '摄影书 / 时尚与生活图像 / 编辑', period: '2011',
        summary: '把时尚、人物、商品、食物、商业 outtakes 和私人图像压入一本书，以跳跃而非线性的方式建立“奢侈”与日常之间的不稳定关系。',
        actions: ['跨来源选择商业和私人图片', '故意保留视觉调性冲突', '通过跨页、重复与突变组织节奏', '不设置单一主人公或线性故事', '让一本书成为重新生产图像意义的机器'],
        sourceUrl: 'https://www.andrewkreps.com/publications/c/roe-ethridge', images: [],
        relations: [{ kind: '出版', label: 'Le Luxe — MACK', detail: '2011' }]
      },
      {
        title: 'Sacrifice Your Body', cluster: '母亲 / 佛罗里达 / 委托与自由拍摄', period: '2011–2014',
        summary: '从母亲故乡 Florida / Lake Okeechobee 的拍摄出发，把家庭关系、地方景观、广告式静物、studio set 上的偶然图像与拼贴并置成长期书项目。',
        actions: ['回到母亲故乡进行数日纪实式拍摄', '数年后重新翻检旧片', '加入委托摄影与自由拍摄', '允许 studio set 上偶然产生的照片进入项目', '把地景、家庭线索和超现实物件重新排序', '同步发展展览与摄影书'],
        sourceUrl: 'https://www.andrewkreps.com/publications/c/roe-ethridge', images: [],
        relations: [{ kind: '出版', label: 'Sacrifice Your Body — MACK', detail: '2014' }]
      },
      {
        title: 'Neighbors / Shelter Island', cluster: '家庭 / 邻居 / 度假地 / 两本书并行', period: '2016',
        summary: '同一年出版的项目继续让家庭、社会关系、住宅和商业视觉互相穿透，显示同一档案可以通过不同编辑规则生成不同作品。',
        actions: ['从长期图像档案中分别建立两个选片池', '围绕邻居 / 家庭 / 地点形成局部关系', '允许同类视觉语言在不同书中产生不同含义', '以出版物而不是统一展览系列作为主要结构'],
        sourceUrl: 'https://www.andrewkreps.com/publications/c/roe-ethridge', images: [],
        relations: [{ kind: '出版', label: 'Neighbors — MACK', detail: '2016' }, { kind: '出版', label: 'Shelter Island — MACK', detail: '2016' }]
      },
      {
        title: 'American Polychronic', cluster: '二十年档案 / 回顾式重新编辑', period: '2022',
        summary: '用 560 页重新组织二十余年艺术与商业实践，让不同年代、用途和技术条件下的图片同时存在，强调摄影档案没有固定最终版本。',
        actions: ['回看二十余年商业与个人档案', '跨年代重新选片', '取消原项目边界', '按新的视觉节奏重组图像', '以超大体量出版把反复出现的 motif 建成长期结构'],
        sourceUrl: 'https://www.andrewkreps.com/publications/c/roe-ethridge', images: [],
        relations: [{ kind: '出版', label: 'American Polychronic — MACK', detail: '2022 · 560 pages' }]
      }
    ],
    awards: ['Deutsche Börse Photography Prize 2011 — shortlist'],
    exhibitions: ['Greater New York — MoMA PS1, 2000', 'New Photography — MoMA, 2010–2011'],
    sources: [{ label: 'MoMA — New Photography 2010', url: 'https://www.moma.org/interactives/exhibitions/2010/newphotography/roe-ethridge/' }, { label: 'MoMA artist archive', url: 'https://www.moma.org/artists/38029-roe-ethridge' }, { label: 'Andrew Kreps — publications', url: 'https://www.andrewkreps.com/publications/c/roe-ethridge' }]
  },

  'torbjorn-rodland': {
    artistId: 'torbjorn-rodland',
    projectCoverage: '6 个 staged analogue / 展览方法节点已建立深档案',
    imageCoverage: '以 Serpentine 2017 大型展览资料为核心，避免把单张怪异静物误写成独立系列',
    note: 'Rødland 很多作品不是以明确“系列标题”工作，因此这里既记录已命名项目，也记录长期制作协议。最重要的是：模拟摄影、预先布置、物质接触和最终暗房图像之间并不是完全可控关系。',
    projects: [
      {
        title: 'Staged analogue image-making protocol', cluster: '模拟摄影 / 编排 / 不确定结果', period: '1990s–',
        summary: '长期以模拟摄影制作大部分肖像、静物和风景；人物、食物、液体和身体会被明确布置，但保留胶片、现场关系与物质变化带来的不可预测结果。',
        actions: ['先选择具有熟悉商业摄影感的对象', '安排人物、身体局部或静物位置', '让不同材料真实接触而非纯后期合成', '使用模拟摄影完成曝光', '在暗房 / 印相中继续决定色彩与表面', '避免用文字把画面意义锁死'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: []
      },
      {
        title: 'White Planet Black Heart', cluster: '早期成熟期 / 肖像 + 景观 + 静物', period: '2003',
        summary: '早期成熟作品已形成后来持续的方法：极度清晰、近似商业图像的摄影被用来容纳无法稳定解释的人物关系和物件组合。',
        actions: ['在肖像、景观与静物之间交替拍摄', '保持高度技术清晰度', '通过人物姿势和物件位置制造叙事缺口', '以书 / 展览序列让不同题材互相污染'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: []
      },
      {
        title: '132 BPM', cluster: '录像 / 节拍 / 身体表演', period: '2005',
        summary: '把静态摄影里的身体姿态推进到时间媒介，以持续的 132 BPM 舞曲节拍组织人物动作和观看节奏。',
        actions: ['设定固定节拍', '让人物在节拍中执行 / 维持动作', '用录像而非单张照片记录持续时间', '保留身体动作与节拍之间的不完全同步'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: []
      },
      {
        title: 'Material collision still lifes', cluster: '食物 / 黏性物质 / 身体配件', period: '2000s–',
        summary: '反复把香蕉、橙子、蛋糕、章鱼触手等食物与蜂蜜、颜料、袜子、纹身和身体局部进行真实接触，让广告式诱惑和生理不适同时出现。',
        actions: ['选择带有消费 / 身体联想的材料', '把食物与黏稠液体、皮肤或配件真实接触', '控制背景和光线接近商业静物', '等待液体流动、融化或污染对象', '在最微妙的物质状态完成模拟曝光'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [], relations: []
      },
      {
        title: 'Hot Dog', cluster: '材料错配 / 商品静物 / 不适感', period: '2013–2017',
        summary: '把热狗与牙膏直接组合成极其简单却难以归类的静物：商品摄影的清晰、食欲和身体排斥被压在一个物理动作里。',
        actions: ['准备常规热狗商品', '将牙膏真实挤到食物表面', '用干净的静物摄影方式控制光线和构图', '保留两种材料接触产生的质感冲突', '制作 C-print 作为独立作品'],
        sourceUrl: 'https://shop.serpentinegalleries.org/products/torbjorn-rodland-hot-dog-limited-edition', images: [], relations: []
      },
      {
        title: 'The Touch That Made You', cluster: '二十年作品重编 / 摄影 + 录像 / 展览空间', period: '2017–2018',
        summary: 'Serpentine 首次英国大型个展将近二十年的肖像、静物、风景和 132 BPM 并置，强调触碰既指镜头前材料之间的物理接触，也指光和化学在暗房中生成照片。',
        actions: ['跨近二十年档案重新选片', '不按题材划分肖像 / 静物 / 风景', '把 132 BPM 录像放入摄影观看节奏', '通过展墙并置让不同年代图像互相解释', '以“touch”重新描述拍摄现场、光线和暗房的共同作用'],
        sourceUrl: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/', images: [],
        relations: [{ kind: '展览', label: 'The Touch That Made You — Serpentine', detail: '2017' }, { kind: '展览', label: 'The Touch That Made You — Fondazione Prada', detail: '2018' }, { kind: '出版', label: 'The Touch That Made You', detail: 'Serpentine publication, 2017' }]
      }
    ],
    awards: [], exhibitions: ['The Touch That Made You — Serpentine, 2017', 'The Touch That Made You — Fondazione Prada, 2018'],
    sources: [{ label: 'Serpentine — The Touch That Made You', url: 'https://www.serpentinegalleries.org/whats-on/torbjorn-rodland-touch-made-you/' }, { label: 'Serpentine publication', url: 'https://shop.serpentinegalleries.org/collections/m-r/products/torbjorn-rodland-the-touch-that-made-you' }]
  }
};
