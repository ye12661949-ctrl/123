import type { ArtistArchive } from './archiveData';
/** 2026-10-10 production research, batch B. */
export const archiveBatch1006: Record<string, ArtistArchive> = {
  "mishka-henner": {
    "artistId": "mishka-henner",
    "projectCoverage": "Feedlots与Dutch Landscapes：2件制作核查",
    "imageCoverage": "2张具名作品图",
    "note": "2026-10-10。严格区分第三方地图影像生成、艺术家选择与输出。来源冲突及缺失参数均标待核。",
    "projects": [
      {
        "title": "Tascosa Feedyard, Bushland, Texas｜逐图制作核查",
        "cluster": "Feedlots｜卫星拼接",
        "period": "2013",
        "summary": "左侧牛栏与右侧绿色水塘形成规则/不规则结构对照。",
        "actions": [
          "【所见】大量方形牛栏及细小黑点占据左侧，右侧是不规则绿色水体与褐色排水地貌。",
          "【制作】艺术家从公开卫星影像平台获取数百张高分辨率截屏，拼接为完整图像，再制作档案颜料印相；卫星摄影本身不是艺术家拍摄。",
          "【输出版本】官网大幅版102×129cm或150×190cm；艺术家商店另列51×40.6cm、250版、320gsm Hahnemühle FineArt Baryta无框小版，不可混记。",
          "【视觉转换】截屏拼接让观众同时看到牛栏的网格与水塘曲线；放大印相可以从抽象色块切换到基础设施细节。",
          "【系列对照】Coronado的红色水塘与Tascosa的绿色水塘形成颜色和边界差异；不能仅凭颜色推算水体化学组成。",
          "【未知】卫星平台图像的具体采集日、截屏数量、拼接软件、地理配准、打印机与现场水质均未核实。"
        ],
        "sourceUrl": "https://mishkahenner.com/feedlots",
        "images": [
          {
            "url": "https://sustainabilitymag.lu/storage/app/media/Culture/mishka-2.jpg",
            "title": "Tascosa Feedyard｜具名作品图",
            "credit": "© Mishka Henner",
            "sourceUrl": "https://mishkahenner.com/feedlots",
            "sourceLabel": "艺术家官网具名作品／Sustainability Mag图版"
          }
        ],
        "relations": []
      },
      {
        "title": "NATO Storage Annex, Coevorden, Drenthe｜逐图制作核查",
        "cluster": "Dutch Landscapes｜地图审查",
        "period": "2011",
        "summary": "绿色农田中央有一块由不规则彩色多边形构成的遮蔽区。",
        "actions": [
          "【所见】周围田地、道路和沟渠清晰，中央方形区域被米色、灰色、绿色几何片覆盖。",
          "【研究】艺术家检索Google卫星影像中已被遮蔽的军事及政治地点，选择该北约设施视图重新框定并输出。",
          "【动作与来源】遮蔽多边形是被艺术家发现并挪用的地图影像特征，不能写成艺术家自己在Photoshop绘制。",
          "【媒介/尺寸】Centre Pompidou藏品AM 2012-282：2011年档案颜料喷墨印相，80×90cm，1/3；艺术家官网还列150×168cm大版。",
          "【转换】原本为了隐藏设施的遮蔽块被重新构图成画面中心，形成数字审查的可见痕迹。",
          "【来源矛盾】艺术家官网称荷兰当局，Pompidou页面称比利时政府；具体责任主体待核，不擅自统一。",
          "【未知】原图像供应商、遮蔽算法、截屏工具、色彩处理和打印设备均未核实。"
        ],
        "sourceUrl": "https://www.centrepompidou.fr/en/ressources/oeuvre/cynbG6e",
        "images": [
          {
            "url": "https://www.centrepompidou.fr/media/picture/13/a1/13a1fdda580d1ecc6ef0dba6feef2e3f/thumb_large.jpg",
            "title": "NATO Storage Annex｜Pompidou馆藏图",
            "credit": "© Mishka Henner / Centre Pompidou",
            "sourceUrl": "https://www.centrepompidou.fr/en/ressources/oeuvre/cynbG6e",
            "sourceLabel": "Centre Pompidou馆藏"
          }
        ],
        "relations": []
      }
    ],
    "awards": [],
    "exhibitions": [],
    "sources": [
      {
        "label": "艺术家官网｜Feedlots",
        "url": "https://mishkahenner.com/feedlots"
      },
      {
        "label": "艺术家官网｜Dutch Landscapes",
        "url": "https://mishkahenner.com/Selected-Dutch-Landscapes"
      },
      {
        "label": "Centre Pompidou馆藏",
        "url": "https://www.centrepompidou.fr/en/ressources/oeuvre/cynbG6e"
      },
      {
        "label": "艺术家商店｜Tascosa版本",
        "url": "https://shop.mishkahenner.com/products/tascosa-feedyard-bushland-tx"
      }
    ]
  }
};
