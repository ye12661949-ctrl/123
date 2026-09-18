import type { Artist } from './data';
import type { ArtistArchive, ArchiveProject } from './archiveData';

type ArtistRecord = Omit<Artist, 'projects' | 'images' | 'sourceUrl' | 'sourceLabel'> & { projects: ArchiveProject[] };
const records: ArtistRecord[] = [
{
id: 'susan-derges',
name: 'Susan Derges',
chineseName: '苏珊·德格斯',
born: '1955',
base: 'Devon, UK',
intro: '把感光纸放进夜间河水中曝光，让水流、枝叶和光直接参与成像；后来又扫描修复受损原作，形成不同版本。',
methods: [
'无相机摄影',
'实物投影',
'水下曝光',
'扫描',
'数字修复'
],
subjects: [
'水',
'自然',
'时间',
'摄影材料'
],
outputs: [
'独版摄影',
'彩色照片'
],
institutions: [
'Art Institute of Chicago',
'Nelson-Atkins Museum of Art'
],
achievements: [
'The River Taw (Rowan), 1998 · 芝加哥艺术学院馆藏'
],
whyImportant: '可以清楚区分两种动作：让河水直接作用于感光纸，以及把已存在的受损照片数字化后再输出。同一图像因此拥有不同材料和版本历史。',
projects: [
{
title: 'The River Taw',
period: '1990s',
cluster: '河水 / 无相机曝光',
summary: '把大型彩色感光纸置于河面下，夜间以闪光曝光；水流和近水枝叶的形态同时进入图像。',
actions: [
'夜间选择河段',
'把彩色感光纸置于水面下',
'以闪光记录水纹及枝叶轮廓',
'显影得到独版原作'
],
sourceUrl: 'https://www.danzigergallery.com/exhibitions/susan-derges3',
images: [

],
relations: [

]
},
{
title: 'The River Taw “Restored”',
period: '2019–2020',
cluster: '扫描修复 / 版本转换',
summary: '对早期因划伤或处理问题留下的照片进行高分辨率扫描和数字修复，再输出有版数的彩色照片；不是重新下河制作的同一批独版原作。',
actions: [
'选择受损原作',
'高分辨率扫描',
'数字修复',
'重新输出并标明版数'
],
sourceUrl: 'https://www.danzigergallery.com/exhibitions/susan-derges3',
images: [

],
relations: [

]
}
]
},
{
id: 'meghann-riepenhoff',
name: 'Meghann Riepenhoff',
born: '1979',
base: 'Bainbridge Island, Washington',
intro: '将手工涂布的蓝晒纸带入海浪、降水和冰冻环境，使水的运动及状态变化直接在纸上留下痕迹。',
methods: [
'无相机摄影',
'蓝晒',
'现场实验',
'自然过程'
],
subjects: [
'水',
'生态',
'时间',
'摄影材料',
'气候'
],
outputs: [
'蓝晒',
'独版摄影',
'摄影书'
],
institutions: [
'Aperture',
'C/O Berlin',
'Moody Center for the Arts'
],
achievements: [
'Guggenheim Fellowship · 2018'
],
whyImportant: '她把地点、天气和曝光条件变成作品生成的一部分。研究时应区分海浪冲刷、降水流动和冰晶形成，而不把所有蓝色抽象照片归成同一种做法。',
projects: [
{
title: 'Littoral Drift',
period: '2013–',
cluster: '海岸 / 动态蓝晒',
summary: '将蓝晒纸带到水边，让海浪、风和泥沙直接接触纸面。图像记录接触过程，而不是镜头中的海景。',
actions: [
'手工涂布蓝晒感光液',
'将纸部分浸入海浪',
'让泥沙与水在表面留下作用痕迹',
'保留不可完全控制的变化'
],
sourceUrl: 'https://meghannriepenhoff.com/project/littoral-drift/',
images: [

],
relations: [

]
},
{
title: 'Ecotone',
period: '持续系列；此处收录 2020–2021 作品',
cluster: '降水 / 蓝晒',
summary: '把纸搭在树枝或围栏上，或放在雪中；承托物形状与雨雪融水共同组织纸面的流痕。',
actions: [
'选择树枝、围栏等承托结构',
'铺挂感光纸',
'记录降水和融化过程',
'以地点与天气条件命名'
],
sourceUrl: 'https://www.hainesgallery.com/exhibitions/18-meghann-riepenhoff-ice/',
images: [

],
relations: [

]
},
{
title: 'Ice',
period: '2015–',
cluster: '冰冻 / 动态蓝晒',
summary: '在低温水体中让纸面结冰，曝光可持续数小时或数天；不同水质、温度与冰晶结构参与形成图像。',
actions: [
'准备蓝晒纸',
'置入冰冻水体',
'让冰晶在纸面形成',
'经历曝光及解冻',
'记录温度、地点和日期'
],
sourceUrl: 'https://www.hainesgallery.com/exhibitions/18-meghann-riepenhoff-ice/',
images: [
{
url: 'https://moody.rice.edu/sites/default/files/styles/hero/public/2025-06/riepenhoff.png?itok=Rv7NKaVj',
title: 'Ice #286 (27–34℉, Ephemeral Stream, WA 2.23.22), 2022',
credit: '© Meghann Riepenhoff；摄影 Gustavo Rasosky',
sourceUrl: 'https://moody.rice.edu/art/meghann-riepenhoff',
sourceLabel: '作品 / 展览官方资料'
}
],
relations: [

]
}
]
},
{
id: 'binh-danh',
name: 'Binh Danh',
born: '1977',
base: 'United States',
intro: '把战争档案肖像印入叶片与草，再用树脂保存；也使用银版摄影拍摄美国地景，让观看者倒影进入照片表面。',
methods: [
'叶绿素印相',
'档案挪用',
'树脂封存',
'银版摄影'
],
subjects: [
'战争',
'记忆',
'迁移',
'风景',
'身份'
],
outputs: [
'树叶照片',
'树脂作品',
'银版照片'
],
institutions: [
'University of Wyoming Art Museum',
'San José Museum of Art'
],
achievements: [
'Life, Times, and Matters of the Swamp · 2010 个展'
],
whyImportant: '植物并非仅用作装饰：历史人物的照片被转移到会衰败的材料上，随后又被树脂保存。银版的镜面则把观看者与美国风景同时纳入观看。',
projects: [
{
title: 'Life, Times, and Matters of the Swamp',
period: '2006 作品 / 2010 展览',
cluster: '战争档案 / 叶绿素印相',
summary: '将战争相关人物图像转移到叶片或草，随后以树脂封存；Swamp Soldiers 是其中明确可查的一件作品。',
actions: [
'选择战争档案图像',
'把透明图像与叶片或草贴合',
'利用日光形成影像',
'以树脂保存有机载体'
],
sourceUrl: 'https://www.uwyo.edu/artmuseum/exhibitions/2010/binh-danh/index.html',
images: [
{
url: 'https://www.uwyo.edu/artmuseum/exhibitions/2010/binh-danh/ex-2010-dahn-swamp-soldier.jpg',
title: 'Swamp Soldiers, 2006',
credit: '© Binh Danh；Courtesy Haines Gallery and the artist',
sourceUrl: 'https://www.uwyo.edu/artmuseum/exhibitions/2010/binh-danh/index.html',
sourceLabel: '作品 / 展览官方资料'
}
],
relations: [

]
},
{
title: 'Yosemite / National Parks daguerreotypes',
period: '2010s',
cluster: '国家公园 / 银版摄影',
summary: '用具有镜面特性的银版拍摄美国国家公园地景；观看者的倒影会与风景图像发生重叠。此条为作品群索引，不冒充统一系列正式标题。',
actions: [
'选择国家公园地景',
'以银版摄影制作镜面图像',
'通过观看角度观察图像与倒影关系'
],
sourceUrl: 'https://binhdanh.com/videos-2/',
images: [

],
relations: [

]
}
]
},
{
id: 'jochen-lempert',
name: 'Jochen Lempert',
born: '1958',
base: 'Hamburg',
intro: '将生物学观察与黑白摄影相结合，也让萤火虫发光、动物运动直接留下感光痕迹，再以图像之间的形态呼应组织展览。',
methods: [
'黑白摄影',
'无相机摄影',
'生物发光',
'暗房',
'图像编排'
],
subjects: [
'生物',
'自然',
'感知',
'人与环境'
],
outputs: [
'银盐摄影',
'展览装置',
'艺术家书'
],
institutions: [
'C/O Berlin',
'Centre Pompidou',
'MoMA'
],
achievements: [
'Camera Austria Award · 2017',
'Lingering Sensations · C/O Berlin 2023'
],
whyImportant: '既包含直接观察摄影，也包含生物自己参与曝光的实验。材料方法与观看方法需要分开：动物留下痕迹是一层，艺术家如何将不同图像相邻排列是另一层。',
projects: [
{
title: 'Firefly (movements on 35 mm)',
period: '具体作品年份待核',
cluster: '生物发光 / 无相机摄影',
summary: '利用萤火虫发光在胶片上留下痕迹。光来自生物本身；不能把它简单写成用闪光灯拍摄昆虫。',
actions: [
'让生物发光作用于胶片',
'记录光点及运动痕迹',
'显影并展示感光结果'
],
sourceUrl: 'https://co-berlin.org/en/program/exhibitions/jochen-lempert',
images: [

],
relations: [

]
},
{
title: 'Lingering Sensations',
period: '2023',
cluster: '黑白摄影 / 展览编排',
summary: '以三个主题部分组织从 1990 年代以来的作品，墙面与展柜并用，并加入邀请函、海报等印刷材料构成视觉传记。',
actions: [
'从长期观察中选取照片',
'按形态与主题并置',
'组合墙面陈列与展柜',
'加入艺术家设计的印刷品'
],
sourceUrl: 'https://co-berlin.org/en/program/exhibitions/jochen-lempert',
images: [
{
url: 'https://co-berlin.org/sites/default/files/styles/pt_image_video_text_upright_mobile/public/2023-09/Opening%2012.%20Mai%202023_DvB%20%28112%29.jpg?itok=t_o-hfIo',
title: 'Lingering Sensations，2023 展览现场（非单件 Firefly）',
credit: '© C/O Berlin Foundation · David von Becker',
sourceUrl: 'https://co-berlin.org/en/program/exhibitions/jochen-lempert',
sourceLabel: '作品 / 展览官方资料'
}
],
relations: [

]
}
]
}
];

export const artistBatch22: Artist[] = records.map(record => ({
  ...record,
  projects: record.projects.map(project => ({
    year: project.period,
    title: project.title,
    type: project.cluster,
    facts: project.actions,
    reading: project.summary,
  })),
  images: record.projects.flatMap(project => project.images),
  sourceUrl: record.projects[0].sourceUrl,
  sourceLabel: '艺术家 / 机构资料',
}));

export const archiveBatch22: Record<string, ArtistArchive> = Object.fromEntries(
  records.map(record => [record.id, {
    artistId: record.id,
    projectCoverage: `${record.projects.length} 个精选项目 / 作品群已索引`,
    imageCoverage: '',
    note: '精选研究档案，非作品全集。逐项区分制作时间、展览年份与作品版本；未核实年份明确标注。',
    projects: record.projects,
    awards: [],
    exhibitions: [],
    sources: record.projects.map(project => ({ label: project.title, url: project.sourceUrl })),
  }])
);

export const archiveExtensions22: Record<string, ArchiveProject[]> = {
'wolfgang-tillmans': [
{
title: 'Silver / Silvers',
period: '1992–（按 MoMA 2022 新闻稿）',
cluster: '无相机摄影 / 冲洗机器痕迹',
summary: '使感光纸通过未清洁的显影设备，保留污物和银盐等造成的干扰。图像记录机器、化学与纸面的相遇，区别于拍摄卷曲纸张的 paper drop。',
actions: [
'让感光纸通过未清洁的显影设备',
'保留污物及银盐痕迹',
'选择并展示材料过程产生的表面'
],
sourceUrl: 'https://assets.moma.org/documents/moma_press-release_533856.pdf',
images: [

],
relations: [

]
}
],
'alison-rossiter': [
{
title: 'Density',
period: '系列年代见各单件标注',
cluster: '历史相纸 / 完全显影',
summary: '将珍稀过期相纸完整显影，让储存损伤、霉变或环境影响产生的潜在痕迹显现；编排强调纸张代表的历史时间。',
actions: [
'选择历史相纸',
'不预设局部几何图形地完整显影',
'辨认潜在痕迹',
'按材料历史组织作品'
],
sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/',
images: [

],
relations: [

]
},
{
title: 'Fours',
period: '系列年代见各单件标注',
cluster: '局部显影 / 几何结构',
summary: '将相纸以不同角度浸入显影液，通过选择显影区域组织黑、棕、白色阶及几何关系。',
actions: [
'以不同角度浸入显影液',
'控制被显影的区域',
'利用纸张响应差异',
'组合几何与色阶'
],
sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/',
images: [

],
relations: [

]
},
{
title: 'Pools',
period: '系列年代见各单件标注',
cluster: '倾倒显影液 / 流体形态',
summary: '把液体显影剂直接倒在相纸表面形成不规则形态。与完整显影历史痕迹不同，这里艺术家主动组织液体的作用区域。',
actions: [
'选择过期相纸',
'把显影液倒在表面',
'让液体与乳剂接触',
'保留各纸张形成的差异'
],
sourceUrl: 'https://yossimilo.com/artists/30-alison-rossiter/biography/',
images: [

],
relations: [

]
}
]
};
