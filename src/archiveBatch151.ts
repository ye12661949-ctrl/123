import type { ArtistArchive, ArchiveRelation } from './archiveData';

const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const atkinsVenice='https://www.labiennale.org/en/art/2019/partecipants/ed-atkins';
const atkinsSerpentine='https://www.serpentinegalleries.org/whats-on/ed-atkins-0/';
const atkinsMoma='https://www.moma.org/artists/43747-ed-atkins';
const atouiVenice='https://www.labiennale.org/en/art/2019/partecipants/tarek-atoui';
const atouiSharjah='https://www.sharjahart.org/en/resources/saf-online/details/tarek-atoui-and-the-realm-of-sound';
const atouiGround='https://lesoeuvres.pinaultcollection.com/en/artwork/ground';
const atouiWalker='https://www.walkerart.org/collections/artwork/the-whisperers-home/';
const baghramianVenice='https://www.labiennale.org/en/art/2019/partecipants/nairy-baghramian';
const baghramianWalker='https://www.walkerart.org/whats-on/nairy-baghramian-deformation-professionnelle/';
const baghramianMoma='https://www.moma.org/artists/69641-nairy-baghramian';

export const archiveBatch151: Record<string, ArtistArchive> = {
  'venice-ed-atkins': {
    artistId:'venice-ed-atkins',
    projectCoverage:'5 个 HD/CGI avatar、text-body、virtual materiality 与 late self-portrait 节点深化 · 2012–2021',
    imageCoverage:'0 / 5',
    note:'把 Ed Atkins 从 Venice 2019 的 Old Food / Bloom 两节点扩成一条“高拟真数字身体为何反而暴露缺席”的方法链。关键不只是 CGI 技术，而是 voice、text、compression、skin、gesture 与 avatar 的错位：数字人物看似具有毛孔、唾液和情绪，却始终没有真正可受伤的肉身。与同时代沉浸式 CGI 实践相比，Atkins 更像把高分辨率影像当成关于死亡、替身和表演失败的写作装置。',
    projects:[
      {title:'Us Dead Talk Love',cluster:'HD video / cadaverous avatar / voice-text / absence',period:'2012',summary:'早期代表作已经建立 Atkins 的核心矛盾：高度清晰的数字影像与关于死亡、身体残余和亲密关系的语言并置。MoMA 将该作纳入馆藏；它为之后反复出现的 avatar、voice-over 与“没有身体的自画像”奠定基础。',actions:['把 HD image 当成不可靠的 corporeal evidence','以 intimate / literary monologue 驱动影像而非传统剧情','让 digital surrogate 承担自画像功能','把死亡与身体缺席写进过度清晰的视觉表面'],sourceUrl:atkinsMoma,images:[],relations:[rel('收藏','Museum of Modern Art, New York','collection work · 2012')]},
      {title:'Ribbons',cluster:'CGI avatar / karaoke / text / virtual corporeality',period:'2014',summary:'Serpentine 2014 展览以 Ribbons 的扩展多屏版本为核心。作品把 realistic CGI protagonist、声音、文字与空间化安装组合起来；艺术家明确把人物的 questionable corporeality、loss 与 monstrousness 当成问题。',actions:['制作高度拟真的 male CGI protagonist','让 avatar 说话、唱歌并执行看似日常却不稳定的动作','把 text / image / sound 分散到多屏和展厅环境','利用逼真 skin / face 与明显 artificiality 之间的落差制造不适','把 gallery 转成 virtual / real object 相互污染的环境'],sourceUrl:atkinsSerpentine,images:[],relations:[rel('展览','Ed Atkins — Serpentine Sackler Gallery','2014 · largest UK public-institution solo exhibition at that date')]},
      {title:'Safe Conduct',cluster:'airport-security choreography / avatar / repetition',period:'2016',summary:'Safe Conduct 把机场安检的动作、托盘、身体扫描和重复流程处理成近乎音乐化的 choreography；MoMA 保存相关 Safe Conduct Epidermal 版本。这里 institution 不再只是背景，而是直接规定 avatar 如何移动和被拆分观看。',actions:['把 airport security protocol 拆成 repeated gesture sequence','让 avatar 在 tray / scanner / checkpoint logic 中循环','把 bureaucratic safety procedure 转成 absurd choreography','以 digital body 测试制度如何把人拆成可检查的局部'],sourceUrl:atkinsMoma,images:[],relations:[rel('收藏','Museum of Modern Art, New York','Safe Conduct Epidermal · 2016')]},
      {title:'Old Food',cluster:'CGI melancholy / historical debris / failed embodiment',period:'2017–2019',summary:'Venice 2019 的大型 installation 将 historicity、melancholy、荒谬和 autobiographical figuration 压在一起。作品并不追求更完美的 simulation，而让技术精度与人物的心理崩塌形成反差。',actions:['延续 realistic CGI male figure 作为 unstable self-proxy','将 autobiographical fragments 与 broader historical citations 混合','让 high-definition surface 承载 deliberately awkward / stupid action','以 installation 而非单屏电影组织观看'],sourceUrl:atkinsVenice,images:[],relations:[rel('展览','May You Live In Interesting Times — 58th Venice Biennale','2019 · Arsenale')]},
      {title:'The Worm / late self-portrait turn',cluster:'conversation / family voice / animation / self-portrait',period:'2021',summary:'MoMA 馆藏 The Worm 标志 Atkins 后期继续把 animation 与更直接的 autobiographical voice 拉近。与早期匿名化 CGI surrogate 相比，作品进一步暴露 family conversation、情绪和语言本身，使“数字替身”逐渐回到具体生活关系。',actions:['把 recorded conversation 纳入 moving-image structure','继续让 animation 承担 self-portrait 而非再现外部人物','减少宏大 narrative，放大 voice、pause 与 emotional dependency','把家庭关系和媒介替身并置'],sourceUrl:atkinsMoma,images:[],relations:[rel('收藏','Museum of Modern Art, New York','The Worm · 2021')]}
    ],
    awards:[],
    exhibitions:['Ed Atkins — Serpentine Sackler Gallery, London · 2014','May You Live In Interesting Times — Venice Biennale · 2019'],
    sources:[{label:'Serpentine · Ed Atkins 2014',url:atkinsSerpentine},{label:'MoMA · Ed Atkins collection',url:atkinsMoma},{label:'La Biennale · Ed Atkins 2019',url:atkinsVenice}]
  },

  'venice-tarek-atoui': {
    artistId:'venice-tarek-atoui',
    projectCoverage:'5 个 participatory listening、Deaf culture、reverse organology、field-research instrument 与 water-acoustics 节点深化 · 2011–2022',
    imageCoverage:'0 / 5',
    note:'把 Tarek Atoui 从“参与式声音艺术”标签拆成一套持续变化的 listening research。核心不是制作新奇乐器，而是反复改变谁能听、身体通过什么部位听、乐器知识由谁定义，以及 museum / city / landscape 怎样成为共同演奏系统。WITHIN 尤其重要：Deaf culture 在这里不是被动 accessibility 对象，而是反过来改变 instrument design 与 sound theory 的知识来源。',
    projects:[
      {title:'Visiting Tarab',cluster:'music archive / collective performance / listening history',period:'2011–2012',summary:'Atoui 早期把音乐史研究转成集体演奏和重新聆听的框架；Sharjah Art Foundation 将 Visiting Tarab 记录为与其长期合作的重要节点。',actions:['从 archival / historical music material 出发','邀请不同背景 musicians 共同重新激活材料','让 research 通过 live performance 被检验','把 archive 从保存对象转成可再次演奏的 score'],sourceUrl:atouiSharjah,images:[],relations:[rel('展览','Performa commission / Sharjah Art Foundation collaboration','2011–2012')]},
      {title:'WITHIN',cluster:'Deaf culture / instrument design / somatic listening / collaboration',period:'2013–ongoing',summary:'项目从 Sharjah 与 Al Amal School for the Deaf 的合作发展出来。艺术家与 Council、学生、音乐家及制作者共同研究 deafness 如何反过来改变 instrument、performance、space 和 listening 的定义；2013 Sharjah Biennial 章节包含十位不同音乐传统的鼓手在城市屋顶、环岛、停车场和广场演出。',actions:['与 Deaf students / community 共同研究而非替其设计 accessibility','把 vibration、touch、visual cue 与 spatial relation 纳入 listening','邀请 instrument makers 根据不同身体感知重新设计乐器','将 performances 分散到城市公共空间','让参与者的反馈持续改变后续章节'],sourceUrl:atouiSharjah,images:[],relations:[rel('展览','Sharjah Biennial 11','2013 · commissioned sound/performance programme'),rel('策展','Yuko Hasegawa / Hoor Al Qasimi','Sharjah context')]},
      {title:'The Reverse Collection',cluster:'museum instrument / recording / reverse engineering / decolonial listening',period:'2016',summary:'面对 anthropology museum 中年代与来源不明的 instruments，Atoui 不先依赖标签恢复“原始身份”，而先让它们被演奏和录音，再只根据听到的声音制作一套新的 instruments。知识路径因此从 object→label 被反转成 sound→new object。',actions:['选择 provenance / use 不清晰的 museum instruments','邀请 performers 实际演奏并建立 recordings','让 makers 不看原物、根据 recordings 制作新乐器','把 museum classification problem 转成 listening experiment','通过复制失败与偏差暴露 instrument knowledge 的制度性'],sourceUrl:'https://www.sharjahart.org/en/sharjah-biennial/sb-10/people/details/tarek-atoui/',images:[],relations:[]},
      {title:'The Ground',cluster:'Pearl River Delta / agricultural research / 12 instruments / participatory polyptych',period:'2014–2019',summary:'Pinault Collection 记录该作来自五年 Pearl River Delta 旅行研究，涉及当地农业、建筑和音乐实践；最终形成由十二件 instrument/sculpture 构成的组合，同时使用贫乏材料和数字技术。它把 field research 转成可以继续被演奏的空间。',actions:['在 Pearl River Delta 长期研究 agriculture / architecture / music','把 field observation 转译为 instrument design','混合 poor materials 与 contemporary digital technologies','以十二件 instrument/sculpture 组成开放 polyptych','允许 collaborators 与观众继续 improvisation'],sourceUrl:atouiGround,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale','2019'),rel('展览','Ouverture — Bourse de Commerce / Pinault Collection','2021')]},
      {title:'The Whisperers: Home',cluster:'water acoustics / hydrophone / transducer / domestic listening ecology',period:'2021–2022',summary:'Walker 馆藏版本把 stone cistern、hydrophone、cymbal、bubble systems、pump、transducer、computer 等组合成水与振动的 listening ecology。声音不再由单一“乐器”发出，而在容器、液体、机械和电子反馈之间迁移。',actions:['用 hydrophone 捕捉 water-borne sound','让 pumps / bubble systems 持续改变声学状态','通过 transducer 把振动重新传给物体','把 household/container forms 转成 acoustic bodies','让 listening 在 air / water / material vibration 之间切换'],sourceUrl:atouiWalker,images:[],relations:[rel('收藏','Walker Art Center','acquired 2024')]}
    ],
    awards:['Suzanne Deal Booth / FLAG Art Foundation Prize — 2022'],
    exhibitions:['Sharjah Biennial 11 · 2013','documenta 13 · 2012','May You Live In Interesting Times — Venice Biennale · 2019','Cycles in 11 — Sharjah Art Foundation · 2020–2021','Ouverture — Bourse de Commerce · 2021'],
    sources:[{label:'Sharjah Art Foundation · Tarek Atoui and the Realm of Sound',url:atouiSharjah},{label:'Pinault Collection · The Ground',url:atouiGround},{label:'Walker Art Center · The Whisperers: Home',url:atouiWalker},{label:'La Biennale · Tarek Atoui 2019',url:atouiVenice}]
  },

  'venice-nairy-baghramian': {
    artistId:'venice-nairy-baghramian',
    projectCoverage:'4 个 body-extension、retrospective-revision、support/collapse 与 public-boundary 节点深化 · 1999–2023',
    imageCoverage:'0 / 4',
    note:'把 Nairy Baghramian 从 Venice 2019 的 Maintainers / Dwindlers 双节点扩成“身体—建筑—支撑系统”的长期雕塑研究。她与一般 anthropomorphic sculpture 的差异在于：身体往往并不出现，而以牙套、肩垫、关节、肠道、支架、软硬材料接触面等 proxy 出现；作品又经常卡在门口、走廊、墙边、花园等 museum threshold，让 sculpture 的形式问题同时成为 institution 如何支撑、展示和分类物体的问题。',
    projects:[
      {title:'Body-extension / architectural threshold practice',cluster:'prosthetic form / architecture / fashion-design reference',period:'1999–ongoing',summary:'Walker 对其二十余年实践的概括强调 architecture、everyday object 与 human body 的关系，以及作品对 museum boundary、transition 和 gap 的占据。材料横跨 steel、rubber、plastic、wax、fabric、cast elements 与 photography，reference 则来自 dance、theater、design 与 fashion。',actions:['从 dental retainer / shoulder pad 等身体延伸物提取形态','通过 scale shift 把日常小物变成近建筑尺寸','把 sculpture 放在 corridor / doorway / edge 等非中心位置','混合 hard / soft、industrial / bodily materials','让 abstraction 与 figurative body 保持无法归类的中间状态'],sourceUrl:baghramianWalker,images:[],relations:[]},
      {title:'Déformation Professionnelle',cluster:'anti-retrospective / remake / rejected material / institutional critique',period:'2016–2018',summary:'面对 retrospective 邀请，Baghramian 没有按年代重展旧作，而制作全新的 sculptures 去反射、变形甚至回收 1999–2016 的旧系列、被拒绝方案和材料。Walker 将其称为“surveying the survey”：回顾展格式本身成为雕塑材料。',actions:['拒绝线性 retrospective display','从过去作品抽取 rejected idea / material / form','制作新作而不是复制旧作','让每件新作与一个既有 body of work 保持偏移关系','把 curator/museum 的 survey logic 纳入作品结构'],sourceUrl:baghramianWalker,images:[],relations:[rel('展览','Déformation Professionnelle — S.M.A.K., Ghent','2016–2017'),rel('展览','Déformation Professionnelle — Walker Art Center','2017–2018'),rel('策展','Vincenzo de Bellis / Victoria Sung / Martin Germann','Walker + S.M.A.K. presentations')]},
      {title:'Maintainers / Dwindlers',cluster:'support-collapse / wax-aluminium-cork / glass appendage',period:'2017–2019',summary:'Venice 2019 将两条方法并置：Maintainers 由 raw cast aluminium、wax、cork bar 与 lacquered braces 相互顶住，支撑同时像攻击；Dwindlers 的 glass appendages 又介于 ventilation duct 与 monstrous intestine 之间。作品的意义来自依赖关系，而非单件雕塑的完整轮廓。',actions:['让 cast aluminium 与 wax 发生硬/软材料冲突','以 cork / lacquered brace 暴露支撑结构','把 support 设计成作品不可移除的组成部分','让 glass form 同时指向 mechanical duct 与 bodily intestine','通过 interdependence 让 collapse possibility 始终可见'],sourceUrl:baghramianVenice,images:[],relations:[rel('展览','May You Live In Interesting Times — Venice Biennale','2019 · Central Pavilion + Arsenale'),rel('收藏','Museum of Modern Art, New York','Maintainers variants · 2017/2018')]},
      {title:'Privileged Points → Reclining (Pauline)',cluster:'public sculpture / museum edge / reclining-body proxy',period:'2017–2023',summary:'Walker commission Privileged Points 把 bronze/paint sculptural fragments放入公共 museum campus；MoMA 后来收藏 Reclining (Pauline) (2023)。这条后期线继续把“人体姿态”从具象身体抽走，只保留 reclining、support、contact point 与 architecture 的关系。',actions:['把 sculpture 推向 museum interior/exterior boundary','用 fragment 而非完整人体暗示 posture','让 public circulation 成为作品尺度参照','持续研究 object 如何 lean / recline / brace / touch architecture'],sourceUrl:baghramianMoma,images:[],relations:[rel('收藏','Walker Art Center','Privileged Points · commissioned 2017'),rel('收藏','Museum of Modern Art, New York','Reclining (Pauline) · 2023')]}
    ],
    awards:['Schering Stiftung Art Award — 2007','Hector Prize — 2012','Arnold Bode Prize — 2014'],
    exhibitions:['documenta 14 · 2017','Skulptur Projekte Münster · 2017','Déformation Professionnelle — Walker Art Center · 2017–2018','May You Live In Interesting Times — Venice Biennale · 2019'],
    sources:[{label:'Walker Art Center · Déformation Professionnelle',url:baghramianWalker},{label:'La Biennale · Nairy Baghramian 2019',url:baghramianVenice},{label:'MoMA · Nairy Baghramian collection',url:baghramianMoma}]
  }
};
