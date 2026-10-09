import type { ArtistArchive } from './archiveData';
/** 2026-10-09 Richard Mosse production research: sourced multispectral frame. */
export const archiveBatch1003: Record<string, ArtistArchive> = {
  'richard-mosse': {
    artistId: 'richard-mosse',
    projectCoverage: 'Broken Spectre：Roraima多光谱航拍逐帧制作核查',
    imageCoverage: '1张设备厂商提供的影片帧',
    note: '区分胶片假彩色红外、热成像和多光谱数字遥感；未确认的镜头、软件、色彩映射均标记未知。',
    projects: [{
      title: 'Broken Spectre｜Roraima多光谱航空帧｜制作核查',
      cluster: '逐图制作核查', period: '2018–2022',
      summary: '航拍俯视，红色树冠环绕青色河道。设备厂商确认此为Broken Spectre的多光谱样本。',
      actions: [
        '【所见】红橙树冠与青蓝色蜿蜒河流构成高反差假彩色图像。',
        '【研究与制作】艺术家研究卫星遥感，定制多传感器设备从空中采样不同光谱带；NGV确认该项目使用机鼻安装的多光谱摄像机。',
        '【设备】Spectral Devices明确记录其提供的样本由MSMC-2-3摄像机以蓝光、红边、近红外窄带滤镜、4K、30fps拍摄。',
        '【转换】多个离散窄带的反射信息经假彩色合成形成非自然红/青地貌；不能据此定量推断汞浓度或生态损失。',
        '【图间关系】与早期Aerochrome胶片、Incoming热成像不同；与Broken Spectre宽幅展陈相比，单帧不呈现剪辑、声音和观众移动。',
        '【待核实】具体飞行高度、镜头、GIS软件、波段映射与本帧在影片中的时间点未知。'
      ],
      sourceUrl: 'https://spectraldevices.com/products/amazon-rainforest-images-with-cinematography-camera-system',
      images: [{url:'https://spectraldevices.com/cdn/shop/files/stillfromBrokenSpectre_Roraima_MultispectralGISaerial13.jpg?v=1713538881&width=1946',title:'Broken Spectre｜Roraima多光谱航空帧',credit:'© Richard Mosse',sourceUrl:'https://spectraldevices.com/products/amazon-rainforest-images-with-cinematography-camera-system',sourceLabel:'Spectral Devices设备厂商'}],
      relations: []
    }],
    awards: [], exhibitions: ['2022 NGV International｜Broken Spectre'],
    sources: [{label:'Spectral Devices｜相机与拍摄参数',url:'https://spectraldevices.com/products/amazon-rainforest-images-with-cinematography-camera-system'},{label:'NGV｜Broken Spectre项目与多光谱方法',url:'https://www.ngv.vic.gov.au/exhibition/richard-mosse-broken-spectre/'}]
  }
};
