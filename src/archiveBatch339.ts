import type { ArtistArchive } from './archiveData';

const rel=(kind:'展览'|'出版'|'奖项'|'收藏'|'策展',label:string,detail?:string)=>({kind,label,detail});

export const archiveExtensions339: Record<string, Partial<ArtistArchive> & { projects?: ArtistArchive['projects'] }> = {
  'theaster-gates': {
    note:'这一轮把 Gates 从“社会实践/社区更新”继续压到具体制作机制：建筑、旧材料、音乐、公共项目和机构经营并不是平行媒介，而是一套把被遗弃的物质与空间重新组织成 Black cultural infrastructure 的方法。Black Chapel尤其显示他如何把父亲的屋顶工艺、宗教建筑原型、城市拆除遗物与现场声音编成同一件作品。',
    projects:[
      {title:'Black Chapel',cluster:'Architecture / Black space / gathering',period:'2022',summary:'为 Serpentine Pavilion 设计圆形木构建筑，参照 Stoke-on-Trent 瓶窑、美国西部蜂巢窑、tempietto、喀麦隆 Musgum 泥屋、乌干达 Kasubi Tombs 以及非洲离散宗教的圆形聚会形式。中央 oculus 提供单一自然光源；入口旁放置从芝加哥已拆除的 St. Laurence Catholic Church 保存下来的可使用青铜钟。建筑不是雕塑式外壳，而被实际用于音乐、工作坊和公共聚会。',actions:['综合多种宗教与工业建筑原型','与 Adjaye Associates 完成建筑支持','设置中央天窗控制自然光','把芝加哥被拆教堂的青铜钟迁入现场','让建筑承载连续现场表演与公共活动'],sourceUrl:'https://www.serpentinegalleries.org/whats-on/serpentine-pavilion-2022-black-chapel-by-theaster-gates/',images:[],relations:[rel('展览','Serpentine Pavilion 2022','10 Jun–16 Oct 2022'),rel('策展','Yesomi Umolu / Natalia Grabowska','Serpentine curatorial team'),rel('策展','Bianca A. Manu','guest curator, live programme')]},
      {title:'Seven Songs for Black Chapel',cluster:'Roofing / painting / family labor',period:'2022',summary:'为 Black Chapel 制作七幅焦油绘画。Gates 直接调用父亲作为屋顶工人的职业知识，以 roofing 的 torch-down 工艺用明火加热并黏附材料。这里“父亲的劳动史”不是附加叙事，而进入作品表面和制作动作本身。',actions:['使用屋顶防水材料/焦油语言','以 torch-down 明火加热材料','制作七幅对应 Pavilion 内部空间的绘画','把家庭劳动技术转换为绘画工艺'],sourceUrl:'https://www.serpentinegalleries.org/whats-on/serpentine-pavilion-2022-black-chapel-by-theaster-gates/',images:[],relations:[rel('展览','Black Chapel','installed inside pavilion')]},
      {title:'The Black Monks at Black Chapel',cluster:'Sound / ritual / activation',period:'2022',summary:'Gates 的 Black Monks 在 Pavilion 内以声音激活建筑，将美国南方音乐传统、jazz、blues、soul 与修行式声响实验混合。作品说明 Gates 的建筑并非等待观看的静态容器：声音、身体和集会完成空间。',actions:['组织声乐与器乐 ensemble','在圆形建筑内部现场演出','利用建筑体积与中央天窗形成声场','把 Black sonic traditions 与冥想/仪式结构连接'],sourceUrl:'https://www.serpentinegalleries.org/whats-on/the-black-monks/',images:[],relations:[rel('展览','Serpentine Pavilion live programme','15 Oct 2022')]}
    ],
    exhibitions:['Serpentine Pavilion 2022: Black Chapel','The Question of Clay: Whitechapel Gallery / White Cube / V&A research context, 2021–22','documenta 13, Kassel, 2012'],
    awards:['Artes Mundi 6 Prize','Nasher Prize for Sculpture, 2018','Frederick Kiesler Prize for Architecture and the Arts, 2021'],
    sources:[{label:'Serpentine — Black Chapel',url:'https://www.serpentinegalleries.org/whats-on/serpentine-pavilion-2022-black-chapel-by-theaster-gates/'},{label:'Serpentine — Black Monks',url:'https://www.serpentinegalleries.org/whats-on/the-black-monks/'}]
  },
  'wangechi-mutu': {
    note:'Mutu 的“混合身体”不能只理解为拼贴风格。她持续把身体分类、神话、殖民图像和物种边界从二维拼贴推到雕塑、建筑立面和电影；材料变化对应着主体从图像中的变形身体走向真正占据公共空间的身体。',
    projects:[
      {title:'Wangechi Mutu: Intertwined',cluster:'Survey / cross-media evolution',period:'2023',summary:'New Museum 的大型调查展占据整座美术馆，汇集100余件从1990年代中期至当时的绘画、拼贴、素描、雕塑和电影，并包含建筑玻璃立面新委托。这个展览最重要的档案价值是把 Mutu 的媒介演变放到同一空间：拼贴中的混合身体并没有消失，而是逐渐获得雕塑体积、建筑尺度和影像时间。',actions:['跨近三十年选择作品','把绘画/拼贴/雕塑/电影并置','以整栋博物馆组织媒介演变','制作建筑立面委托'],sourceUrl:'https://www.newmuseum.org/event/sunday-screenings-wangechi-mutu/',images:[],relations:[rel('展览','Wangechi Mutu: Intertwined','New Museum, 2 Mar–4 Jun 2023')]},
      {title:'Film works: Amazing Grace / Eat Cake / The End of eating Everything / My Cave Call',cluster:'Film / hybrid body / ritual',period:'2005–2021',summary:'New Museum 在 Intertwined 期间把四部电影作为连续放映单元呈现，使 Mutu 的实践不能被缩成静态拼贴：运动、声音、吞食、仪式和身体变形在时间媒介中继续她对分类体系与人/非人边界的研究。',actions:['把混合身体转入运动影像','使用表演/动画/声音建立时间结构','在调查展中把电影与实体作品并置'],sourceUrl:'https://www.newmuseum.org/event/sunday-screenings-wangechi-mutu/',images:[],relations:[rel('展览','Sunday Screenings: Wangechi Mutu','New Museum, 2023')]}
    ],
    exhibitions:['Wangechi Mutu: Intertwined, New Museum, 2023'],
    sources:[{label:'New Museum — Intertwined / film programme',url:'https://www.newmuseum.org/event/sunday-screenings-wangechi-mutu/'}]
  },
  'yto-barrada': {
    note:'Barrada 的核心可进一步理解为“约束中的生产”：她反复使用手边可得材料、地方基础设施和已有档案，把 migration / Tangier 的政治问题扩展到电影馆、花园、纺织、出版与策展。她不是从摄影离开政治，而是把政治从图像内容推进到文化生产条件本身。',
    projects:[
      {title:'Artist’s Choice: Yto Barrada—A Raft',cluster:'Curating / alternative social forms',period:'2021–2022',summary:'Barrada 从 MoMA 馆藏选择作品回应法国社会工作者/作家 Fernand Deligny 在1960年代后期与非语言儿童共同生活的实践。策展不以风格相似为原则，而把作品当成重新想象关系、语言和共同生活方式的模型。',actions:['研究 Fernand Deligny 的生活与社会实践','从 MoMA 馆藏跨媒介选件','把作品按关系与共同生活问题重新编排','与摄影部策展人 Lucy Gallun、River Encalada Bullock 协作'],sourceUrl:'https://www.moma.org/calendar/exhibitions/5300',images:[],relations:[rel('展览','Artist’s Choice: Yto Barrada—A Raft','MoMA, 8 May 2021–9 Jan 2022'),rel('策展','Lucy Gallun / River Encalada Bullock','organized with Yto Barrada')]}
    ],
    exhibitions:['Artist’s Choice: Yto Barrada—A Raft, MoMA, 2021–22'],
    sources:[{label:'MoMA — Yto Barrada artist profile',url:'https://www.moma.org/collection/artists/42323'},{label:'MoMA — A Raft',url:'https://www.moma.org/calendar/exhibitions/5300'}]
  }
};
