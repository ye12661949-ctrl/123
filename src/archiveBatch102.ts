import type { ArtistArchive, ArchiveRelation } from './archiveData';
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

const derenVenice='https://www.labiennale.org/en/art/2022/witchs-cradle/maya-deren';
const derenMoma='https://www.moma.org/collection/works/299942';
const derenChoreo='https://www.moma.org/collection/works/302825';
const ovartaciVenice='https://www.labiennale.org/en/art/2022/milk-dreams/ovartaci';
const bakerVenice='https://www.labiennale.org/en/art/2022/witchs-cradle/josephine-baker';
const arndtVenice='https://www.labiennale.org/en/art/2022/witchs-cradle/gertrud-arndt';
const benedettaVenice='https://www.labiennale.org/en/art/2022/witchs-cradle/benedetta';
const saintPointVenice='https://www.labiennale.org/en/art/2022/witchs-cradle/valentine-de-saint-point';

export const archiveBatch102: Record<string, ArtistArchive> = {
  'venice-maya-deren': {
    artistId:'venice-maya-deren', projectCoverage:'3 个 trance-film / ritual montage / choreocinema 核心节点已建立深档案 · 1943–1945', imageCoverage:'0 / 3 项目暂不使用不稳定外链图像', note:'精选项目档案，尚非作品全集。Deren 的关键不是“梦境题材”，而是让剪辑、重复动作和身体位移共同生成 time-space art。',
    projects:[
      {title:'The Witch’s Cradle',cluster:'occult ritual / discontinuous montage',period:'1943',summary:'Pajorita Matta 在近似仪式的场景中移动，线绳、手、五芒星、心脏等元素由 jump-cut 串联，因果叙事被身体感觉与象征链条取代。',actions:['以 hand / string / pentacle / heart 等重复 motif 代替传统情节','用 abrupt jump cuts 主动破坏空间连续性','把 performer 作为视觉动作链中的身体节点','通过 close-up 与 dark interior 形成 ritual rhythm'],sourceUrl:derenVenice,images:[],relations:[rel('展览','The Witch’s Cradle — Venice Biennale 2022','Central Pavilion historical capsule')]},
      {title:'Meshes of the Afternoon',cluster:'trance film / domestic repetition / subjective montage',period:'1943',summary:'钥匙、刀、镜面人物、花与楼梯不断重复，同一女性主体被复制为多个版本，使普通住宅逐渐转成心理空间。',actions:['在同一 house / street 反复拍摄相似动作路径','用 repeated objects 建立 symbolic editing system','通过 multiple selves 破坏线性时间','以 montage 将 dream logic 与日常空间叠加'],sourceUrl:derenMoma,images:[],relations:[rel('收藏','Museum of Modern Art, New York','Film collection')]},
      {title:'A Study in Choreography for Camera',cluster:'dance-film / match movement / impossible geography',period:'1945',summary:'Talley Beatty 的连续舞蹈动作被剪接到森林、公寓、博物馆等不同地点，身体动作在剪辑点保持连续，现实距离被压缩成电影地理。',actions:['先 choreograph dancer movement 再设计 camera / edit points','让同一动作跨不同 physical locations 接续','使用 match-on-action 压缩现实距离','让 camera 成为 dancer 的 partner'],sourceUrl:derenChoreo,images:[],relations:[rel('收藏','Museum of Modern Art, New York','Film collection')]}
    ], awards:['Guggenheim Foundation grant for creative motion-picture work — 1946'], exhibitions:['The Witch’s Cradle — Venice Biennale 2022'], sources:[{label:'La Biennale · Maya Deren 2022',url:derenVenice},{label:'MoMA · Meshes of the Afternoon',url:derenMoma},{label:'MoMA · A Study in Choreography for Camera',url:derenChoreo}]
  },

  'venice-ovartaci': {
    artistId:'venice-ovartaci', projectCoverage:'3 个 mythic-creature / doll-body / escape-machine 节点已建立深档案 · c.1930s–1980s', imageCoverage:'0 / 3 项目暂不使用不稳定外链图像', note:'精选项目档案，尚非作品全集。Ovartaci 在 Risskov psychiatric hospital 长期生活与工作；creature drawings、large dolls 与 helicopter plans 共同构成持续的 self-invention / escape system。',
    projects:[
      {title:'Mythological creature drawings and paintings',cluster:'animal-human figure / past lives / private cosmology',period:'mid-20th century',summary:'纤长、近动物化的人形反复出现在 Ancient Egypt 或 pagan circus 式场景中，并与 artist 对 earlier lives 的叙述联系。',actions:['反复发展 slender elongated body type','混合 human / animal anatomy','把 mythological scene 与 autobiographical cosmology 连接','长期积累同一世界观的图像群'],sourceUrl:ovartaciVenice,images:[],relations:[rel('展览','The Milk of Dreams — Venice Biennale 2022','Central Pavilion')]},
      {title:'Large dolls',cluster:'sculpted doll / painted + fabric clothing / alternate body',period:'mid-20th century',summary:'大型 dolls 配以绘制或真实织物服装，使二维 creature world 变成可以穿衣、被摆放、与真人共享空间的替代身体。',actions:['制作 large anthropomorphic doll bodies','结合 painted clothing 与 actual fabric garments','通过 costume 改变 persona','保留 handmade intimate finish'],sourceUrl:ovartaciVenice,images:[],relations:[]},
      {title:'Helicopter plans and models',cluster:'escape drawing / cardboard-wood model / impossible machine',period:'ongoing during hospital years',summary:'大量设计图与 cardboard / wood 模型围绕一种能够飞出 hospital walls 的 helicopter 展开，把逃离制度空间变成持续数十年的造物实践。',actions:['反复绘制 helicopter-like plans','用 cardboard / wood 转换为 physical models','持续修改 propeller / body / flight idea','把 escape fantasy 变成 material project'],sourceUrl:ovartaciVenice,images:[],relations:[]}
    ], awards:[], exhibitions:['The Milk of Dreams — Venice Biennale 2022'], sources:[{label:'La Biennale · Ovartaci 2022',url:ovartaciVenice}]
  },

  'venice-josephine-baker': {
    artistId:'venice-josephine-baker', projectCoverage:'2 个 staged-performance / image-politics 历史节点已建立档案 · 1925–1930s', imageCoverage:'0 / 2 节点暂不使用不稳定外链图像', note:'Josephine Baker 并非传统视觉艺术家；本站保留她是因为 Venice 2022 将其表演影像作为身体、殖民想象与自我塑造的历史节点纳入 The Witch’s Cradle。',
    projects:[
      {title:'Revue nègre',cluster:'cabaret / colonial stereotype / self-fashioned performance body',period:'1925',summary:'Paris 首演大量调用欧洲对“非洲”的殖民想象；Baker 通过速度、身体控制与夸张表情，在 stereotype 内创造高度主动的 performer persona。',actions:['以 dance / facial expression / costume 构成 stage persona','在 colonial scenography 与 performer agency 之间制造张力','通过 repeated performances 将身体变成 mass-media image','用 humor / clowning 干扰单一 erotic gaze'],sourceUrl:bakerVenice,images:[],relations:[rel('展览','The Witch’s Cradle — Venice Biennale 2022','historical performance footage context')]},
      {title:'Folies Bergère performance image',cluster:'silent footage / Charleston / costume-image system',period:'late 1920s–1930s',summary:'silent footage 中，Charleston、羽毛 costume、珠宝、裸露身体与夸张面部表情共同制造既性感又滑稽的动态影像。',actions:['用 feathered / jeweled costume 强化 silhouette','把 fast dance 与 facial comedy 同时使用','让 erotic display 与 comic disruption 并存','通过 film / photography circulation 把 live performance 转成复制媒介'],sourceUrl:bakerVenice,images:[],relations:[]}
    ], awards:[], exhibitions:['The Witch’s Cradle — Venice Biennale 2022'], sources:[{label:'La Biennale · Josephine Baker 2022',url:bakerVenice}]
  },

  'venice-gertrud-arndt': {
    artistId:'venice-gertrud-arndt', projectCoverage:'1 个 self-performance photography 核心系列已建立深档案 · 1930', imageCoverage:'0 / 1 项目暂不使用不稳定外链图像', note:'Arndt 的摄影生涯极集中：Maskenselbstbildnis 43 张自画像通过廉价布景、服装与姿态，把“女性身份”处理成可连续扮演与拆卸的角色系统。',
    projects:[{title:'Maskenselbstbildnis',cluster:'self-portrait / costume role-play / New Woman identity',period:'1930',summary:'43 张黑白照片中，Arndt 扮成少女、寡妇、geisha、珠宝贵妇等不同女性类型，同时始终让 viewer 意识到所有角色来自同一个身体。',actions:['以自己作为唯一长期 model','持续改变 costume / make-up / pose','用 veil、hat、jewellery 快速制造 persona','以 black-and-white photography 统一不同角色','让 Neue Frau、mourning widow 等类型连续可比较'],sourceUrl:arndtVenice,images:[],relations:[rel('展览','The Witch’s Cradle — Venice Biennale 2022','Central Pavilion')]}], awards:[], exhibitions:['The Witch’s Cradle — Venice Biennale 2022'], sources:[{label:'La Biennale · Gertrud Arndt 2022',url:arndtVenice}]
  },

  'venice-benedetta': {
    artistId:'venice-benedetta', projectCoverage:'2 个 verbal-visual novel / graphic-synthesis Futurist 节点已建立深档案 · 1924', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Benedetta 将 Second Futurism 从机器速度推向 occult / cosmological interiority；文字、pseudo-scientific language 与 graphic synthesis 被当成同一作品系统。',
    projects:[
      {title:'Le forze umane: romanzo astratto con sintesi grafiche',cluster:'abstract novel / parolibere / graphic synthesis',period:'1924',summary:'小说在 autobiographical realism 与 abstract pseudo-scientific passages 之间切换，并加入 19 幅 ink graphic syntheses。',actions:['将 narrative 与 abstract pseudo-scientific prose 交替编排','制作 19 幅 black-ink graphic syntheses','用 curved / broken lines 区分 bodily force','让 image 作为 parallel language 而非文字插图'],sourceUrl:benedettaVenice,images:[],relations:[rel('出版','Le forze umane','1924')]},
      {title:'Contatto di due nuclei potenti (femminile e maschile)',cluster:'gender-energy diagram / line collision / cosmological Futurism',period:'1924',summary:'两组不同方向与节律的线条混合成“女性/男性两个强大核心的接触”，把 gender relation 转成 force / nucleus / energy vocabulary。',actions:['用 minimal black lines 代替 figurative body','让两套 line systems 在 central zone 互相穿透','把 gender relation 转成 force vocabulary','把 spiritual / rational 与 conscious / subconscious 压缩到 graphic structure'],sourceUrl:benedettaVenice,images:[],relations:[rel('展览','The Witch’s Cradle — Venice Biennale 2022','Central Pavilion')]}
    ], awards:[], exhibitions:['The Witch’s Cradle — Venice Biennale 2022'], sources:[{label:'La Biennale · Benedetta 2022',url:benedettaVenice}]
  },

  'venice-valentine-de-saint-point': {
    artistId:'venice-valentine-de-saint-point', projectCoverage:'2 个 manifesto-performance / synaesthetic dance 节点已建立深档案 · 1912–1914', imageCoverage:'0 / 2 项目暂不使用不稳定外链图像', note:'Saint-Point 横跨 manifesto、诗、performance 与 dance。重点是她如何把 Futurism 的性别冲突先转成文本宣言，再发展为 movement + poetry + projection + perfume 的 Métachorie。',
    projects:[
      {title:'Manifeste de la Femme futuriste / Manifeste futuriste de la luxure',cluster:'manifesto / gender polemic / performed text',period:'1912–1913',summary:'她以公开朗诵和文本回应 Futurism 的 misogyny，同时借用当时 Futurist 的 aggressive vocabulary 讨论女性独立与 lust 作为 creative force。',actions:['把 manifesto 写作当成 public performance material','借用 / 反转 Futurist rhetoric 处理 gender role','通过 recital 让 author body 与文本同步出现','把 sexuality / lust 改写为 artistic energy'],sourceUrl:saintPointVenice,images:[],relations:[rel('出版','Manifeste de la Femme futuriste / Manifeste futuriste de la luxure','1912–1913')]},
      {title:'Métachorie',cluster:'dance / poetry recital / projection / perfume',period:'1914',summary:'Métachorie 将 movement、poetry recital、projected images 与 perfume 同时组织进表演，并以黑底蚀刻记录姿态，使舞蹈成为跨感官媒介系统。',actions:['设计 movement sequence 并与 spoken poetry 同步','加入 projected imagery 扩展身体空间','使用 perfume 纳入 smell','以 black-ground etchings 转译 pose / stage atmosphere','把 dance 处理为跨媒介结构而非 narrative ballet'],sourceUrl:saintPointVenice,images:[],relations:[rel('展览','The Witch’s Cradle — Venice Biennale 2022','historical capsule documentation')]}
    ], awards:[], exhibitions:['The Witch’s Cradle — Venice Biennale 2022'], sources:[{label:'La Biennale · Valentine de Saint-Point 2022',url:saintPointVenice}]
  }
};
