export const productionDetailBatch: Record<string, Record<string, {
  chain: string[];
  studies: { title: string; imageUrl: string; sourceUrl: string; seen: string; making: string; specifications: string; comparison: string }[];
}>> = {
  'walead-beshty': {
    'FedEx Glass Works': {
      chain: [
        '按 FedEx 标准纸箱尺寸制作透明或镜面夹层玻璃盒，初次寄送时玻璃无裂纹。',
        '以原装纸箱通过 FedEx 真实运输，物流冲击产生裂纹；夹层玻璃保持结构完整。',
        '纸箱、钢制支撑、胶带、运单、报关单及累积追踪标签都是作品材料。',
        '每次展出继续用同一纸箱和朝向寄送，保留旧标签并记录新裂纹；玻璃与纸箱必须共同展示。',
        '具体相机、玻璃品牌与厚度、每条裂纹对应的碰撞事件均未确认。'
      ],
      studies: [
        {
          title: 'FedEx Large Box · Los Angeles–New York · 2007',
          imageUrl: 'https://dist.phillips.com/auction-assets/NY010114/113_001.jpg?width=928',
          sourceUrl: 'https://www.phillips.com/detail/walead-beshty/79191',
          seen: '白色 FedEx 纸箱上竖立透明玻璃盒，多条裂纹向底部汇聚。',
          making: '按标准箱尺寸制造夹层玻璃盒，2007-11-27 至 28 日经 FedEx Priority Overnight 运输；冲击留下裂纹。',
          specifications: '玻璃 8.3 × 31.1 × 45.1 cm；纸箱 8.9 × 31.8 × 45.7 cm；玻璃、硅胶、金属、纸箱、胶带及标签。',
          comparison: '与 2012 年 10kg Box 比较形体与裂纹，不是同一作品的前后阶段。'
        },
        {
          title: 'FedEx 10kg Box · KADIST · 2012',
          imageUrl: 'https://kadist.org/wp-content/uploads/2016/04/wb_765_view_2.jpg',
          sourceUrl: 'https://kadist.org/work/fedex-10kg-box/',
          seen: '较宽的透明玻璃盒放在棕色 10kg Box 上，箱顶文字透过玻璃可见；未见清晰的大面积放射裂纹。',
          making: '依据标准 10kg Box 制作并运输，馆藏记录夹层玻璃、纸箱和累积标签；具体路线未公布。',
          specifications: 'KADIST 未公布尺寸、玻璃厚度或摄影设备；不可套用其他单件尺寸。',
          comparison: '不同箱体规格改变视觉比例；照片裂纹不明显不能证明没有运输损伤。'
        }
      ]
    }
  }
};
