import type { ArtistArchive, ArchiveProject, ArchiveRelation } from './archiveData';

const rel=(kind:ArchiveRelation['kind'],label:string,detail?:string):ArchiveRelation=>({kind,label,detail});
const project=(p:ArchiveProject)=>p;

export const archiveBatch283:Record<string,ArtistArchive>={
  'taryn-simon':{
    artistId:'taryn-simon',
    projectCoverage:'在既有 Taryn Simon 档案基础上继续下钻，新增 The Innocents 的具体个案与出版/展览版本、Paperwork and the Will of Capital 的具体外交文件节点与雕塑系统，以及 An Occupation of Loss 的 Park Avenue Armory 首演版本。',
    imageCoverage:'本批 5 / 5 节点均找到 MoMA、Gagosian 或 Park Avenue Armory 的作品/安装图入口。机构页面明确标注 © Taryn Simon、Rob McKeever、Matteo D’Eletto、Naho Kubota、James Ewing 等版权/摄影信息；未确认可自由再发布，因此不把受限图片复制进仓库，images 暂缺并在关系字段保留图片来源与版权状态。',
    note:'作品级研究批次。重点把 Simon 的“调查摄影”拆成调查对象、现场选择、拍摄/印刷、文字证据、物件保存、空间结构与观看机制；系列不只保留总述，而进入具体人物、具体外交协议和具体演出版本。',
    projects:[
      project({
        title:'The Innocents — Charles Irvin Fain, Snake River crime scene',cluster:'wrongful conviction / site portrait / image-memory critique',period:'2002; print 2012',
        summary:'Simon 没有把 Charles Irvin Fain 拍在中性摄影棚，而是把他带到爱达荷州 Melba 的 Snake River 犯罪现场——这是他从未到过、却因错误定罪而决定其人生的地点。Fain 因谋杀、强奸和绑架被判死刑并服刑18年后获释。Simon 让“被摄者真实身体”与“错误司法叙事中的地点”同时进入画面，使照片既像证据又暴露证据的不可靠性。MoMA 馆藏版本为2012年印制的 inkjet print，121.9 × 157.5 cm。',
        actions:['调查 DNA 平反案件与司法档案，并与 Innocence Project 的案件网络建立研究联系。','选择对错误定罪具有关键意义、但可能与被摄者真实经历矛盾的地点，而非统一背景。','把 Charles Fain 带到其从未到过的犯罪现场进行现场肖像拍摄。','把肖像与姓名、地点、罪名、服刑年限等文字信息并置，使观众同时读取图像和司法事实。','最终以大尺幅 inkjet print 呈现；MoMA 馆藏登记为121.9 × 157.5 cm。'],
        sourceUrl:'https://www.moma.org/collection/works/164438',images:[],relations:[rel('收藏','Museum of Modern Art, New York','Inkjet print, printed 2012；48 × 62 in；Object no. 1245.2012。MoMA 页面提供对应作品图，© Taryn Simon，未标示自由下载/再发布许可。'),rel('出版','The Innocents','系列后来进入书籍；2021 MoMA 扩展版加入此前未刊图像、警方报告、庭审记录与通信。')]
      }),
      project({
        title:'The Innocents — MoMA PS1 exhibition / 46 exonerees system',cluster:'photography / interviews / legal documents / documentary',period:'2000–2003; PS1 2003; expanded edition 2021',
        summary:'The Innocents 从2000年 Simon 为《纽约时报杂志》拍摄死囚平反者的委托扩展而来。获得 Guggenheim Fellowship 后，她跨越美国拍摄并采访错误定罪者。最终系统包含46名被平反者：拍摄地点不是任意肖像背景，而被分为犯罪现场、误认现场、逮捕地点或不在场证明地点。2003年 MoMA PS1 展览还把摄影与 documentary 一同呈现；2021扩展出版物进一步加入警察报告、庭审记录和通信，使项目从肖像系列变成图像—口述—司法文件互相校验的档案。',
        actions:['从2000年的媒体委托继续扩展为长期独立调查，并跨美国寻找错误定罪/平反个案。','拍摄46名被平反者，并按 crime scene、misidentification、arrest、alibi 等地点逻辑选择现场。','记录和编辑人物访谈，使照片旁边存在被摄者自己的案件叙述。','2003 MoMA PS1 版本同时呈现 photographs 与 documentary，而非只展示静态肖像。','2021扩展版重新进入档案，加入 police reports、court transcripts、correspondence 与未刊图像，形成440页、302幅插图的出版版本。'],
        sourceUrl:'https://www.moma.org/calendar/exhibitions/4783',images:[],relations:[rel('展览','MoMA PS1, 11 May–31 Aug 2003','由 Klaus Biesenbach 与 Amy Smith-Stewart 组织；摄影与纪录片共同展示。'),rel('出版','MoMA expanded edition, 2021','440 pp., 302 illustrations；新增司法原始文件和未刊图像。官方页面有书籍/作品图，版权受限。')]
      }),
      project({
        title:'Paperwork and the Will of Capital — Cambodia/Australia refugee agreement reconstruction',cluster:'archival research / floral reconstruction / archival inkjet / herbarium paper',period:'2015',
        summary:'Simon 研究国家领导人和官员签署政治、经济协议时桌面上的花卉布置，把通常只是新闻照片背景的花变成主角。以2014年9月26日柬埔寨内政部签署的“柬埔寨王国政府与澳大利亚政府关于在柬埔寨安置难民的谅解备忘录”为例，她依据签约现场的档案/新闻图像重新辨认并重建桌花，再以高度控制的摄影方式拍摄。成品不是普通花卉静物：图像与协议名称、地点和日期文字一起印在 archival herbarium paper 上，置入仿董事会家具语言的 mahogany/wood frame。该具体作品为 archival inkjet print and text on archival herbarium paper，215.9 × 186.1 × 7 cm，edition 3 + 2 AP。',
        actions:['检索外交协议签署照片，把背景中的桌花从政治新闻图像中分离出来研究。','根据历史图像识别花材并重新制作签约时的花卉组合，而不是直接挪用原新闻照片。','在控制条件下重新拍摄重建花束，并把协议名称、签署地点、日期等文本并入最终图像。','以 archival inkjet 技术将图像与文字输出到 archival herbarium paper。','使用定制木框/桃花心木视觉语言模拟董事会家具，使外交权力的室内审美进入作品物质结构。'],
        sourceUrl:'https://gagosian.com/exhibitions/2016/taryn-simon-paperwork-and-the-will-of-capital-new-york/',images:[],relations:[rel('展览','Gagosian New York, 18 Feb–26 Mar 2016','官方作品页提供该具体协议作品图；© Taryn Simon。安装图摄影 Rob McKeever，未确认可自由仓库再发布。'),rel('展览','Gagosian Rome, 14 Apr–8 Jul 2016','同系列在不同空间重装；安装图摄影 Matteo D’Eletto，可用于比较照片与花压雕塑的空间关系。')]
      }),
      project({
        title:'Paperwork and the Will of Capital — 12 concrete flower-press sculptures / 36 photographs',cluster:'photography / concrete sculpture / preserved botanical specimens / installation',period:'2015–2016',
        summary:'完整系列由36张版次摄影与12件唯一雕塑组成。Simon 不只把外交花束重新拍照：重建花束在摄影之后被压制、干燥并保存，其植物标本和相关文件被纳入造型化的混凝土 flower presses。于是同一历史事件产生两套物质状态：一边是鲜艳、巨大、定制桃花心木框的摄影，另一边是脆弱植物被压在沉重混凝土结构中的实体档案。雕塑最早在2015年第56届威尼斯双年展预展，2016纽约展第一次与36张摄影作为完整系列共同呈现。',
        actions:['从36次具有政治/经济后果的协议签署现场图像中研究花卉中心摆设。','逐一重建花束并摄影，制作36张大型版次作品。','摄影完成后保存真实重建花材，将其压制、干燥成为植物标本。','设计12件 stylized concrete flower presses，把脆弱干花标本及文献放入沉重雕塑结构。','2016纽约版本首次把12件唯一雕塑与36张摄影共同编排，使“鲜花图像”与“被保存的死亡植物”在同一展厅互相对照。'],
        sourceUrl:'https://gagosian.com/exhibitions/2016/taryn-simon-paperwork-and-the-will-of-capital/',images:[],relations:[rel('展览','56th Venice Biennale, 2015','雕塑部分先行展示。'),rel('展览','Gagosian New York / Rome, 2016','完整系列包含12 unique sculptures + 36 editioned photographs；官方安装图分别摄影 Rob McKeever / Matteo D’Eletto，版权归作品/摄影者，故仅记录入口。')]
      }),
      project({
        title:'An Occupation of Loss — Park Avenue Armory world-premiere version',cluster:'performance / concrete architecture / professional mourners / sound / audience activation',period:'13–25 Sep 2016',
        summary:'这是 Simon 首次执导的现场表演。她与 OMA 的 Shohei Shigematsu 共同设计 Wade Thompson Drill Hall 中的建筑装置：11座类似倒置井/塔的混凝土结构形成半圆关系。每天日落后，来自15个国家、总数超过30人的职业哀悼者进入这些塔体，以各自传统的哭丧、歌唱和哀号方式发声；声音从混凝土腔体向巨大 Drill Hall 扩散。白天没有正式表演时，观众可以进入并用自己的声音“激活”这些倒井，同时空间播放由哀悼仪式录音提炼出的持续 drone/white noise。因此作品的材料不仅是表演者，也包括混凝土建筑、空间声学、录音、灯光、观众身体和严格的日落时间机制。',
        actions:['跨15个国家研究并邀请30余名 professional mourners，把原本依附特定死亡仪式的劳动带到纽约。','与 Shohei Shigematsu/OMA 设计11座混凝土塔/倒井，按半圆关系放入 Armory 巨型 Drill Hall。','每晚日落后安排哀悼者进入结构并执行各自传统的lamentation，使建筑成为声学容器。','从仪式录音中提炼持续 drone，白天作为低强度声场播放。','白天开放装置，让没有表演者时的观众用自身声音激活倒井，从观看者转为临时发声者。'],
        sourceUrl:'https://www.armoryonpark.org/season-events/2016-season/taryn-simon-an-occupation-of-loss/',images:[],relations:[rel('展览','Park Avenue Armory world premiere, 13–25 Sep 2016','Park Avenue Armory + Artangel commission；installation/architecture: Taryn Simon + Shohei Shigematsu/OMA；lighting: Urs Schönebaum。'),rel('展览','官方图像档案','Armory 页面保存10张对应安装/表演图；摄影 Naho Kubota 与 James Ewing。图片未标示开放再发布许可，故本地暂缺。')]
      })
    ],
    awards:[],exhibitions:['MoMA PS1 — The Innocents, 2003','56th Venice Biennale, 2015','Gagosian New York / Rome — Paperwork and the Will of Capital, 2016','Park Avenue Armory — An Occupation of Loss, 2016'],
    sources:[{label:'MoMA — The Innocents / Charles Fain',url:'https://www.moma.org/collection/works/164438'},{label:'MoMA PS1 — The Innocents',url:'https://www.moma.org/calendar/exhibitions/4783'},{label:'Gagosian — Paperwork and the Will of Capital',url:'https://gagosian.com/exhibitions/2016/taryn-simon-paperwork-and-the-will-of-capital-new-york/'},{label:'Park Avenue Armory — An Occupation of Loss',url:'https://www.armoryonpark.org/season-events/2016-season/taryn-simon-an-occupation-of-loss/'}]
  }
};
