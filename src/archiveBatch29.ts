import type { ArtistArchive, ArchiveImage, ArchiveRelation } from './archiveData';

const img = (url: string, title: string, credit: string, sourceUrl: string, sourceLabel: string): ArchiveImage => ({ url, title, credit, sourceUrl, sourceLabel });
const rel = (kind: ArchiveRelation['kind'], label: string, detail?: string): ArchiveRelation => ({ kind, label, detail });

export const archiveBatch29: Record<string, ArtistArchive> = {
  'lucas-blalock': {
    artistId: 'lucas-blalock',
    projectCoverage: '7 个关键作品 / 方法节点已建立深度档案 · 2010–现在',
    imageCoverage: '4 / 7 节点已有机构代表图像',
    note: '按 Blalock 的真实工作链整理：4×5 胶片拍摄 → 扫描 → Photoshop 中故意显露的复制、擦除、涂抹、错误修补 → 大幅输出。重点不是“奇怪效果”，而是把商业修图本应隐藏的操作痕迹公开。',
    projects: [
      {
        title: 'Grid / Grid', cluster: 'early digital intervention / chromogenic print', period: '2010',
        summary: '早期关键作品。摄影图像与规则化网格发生冲突，已经明确出现他后来持续使用的策略：让数字加工不再模拟无缝真实，而成为画面中可被辨认的第二种痕迹。',
        actions: ['先获得摄影底图', '将摄影转换进入数字工作流', '叠加 / 操作规则化图形结构', '不隐藏数字加工与摄影底图之间的不连续', '以大幅 chromogenic print 输出'],
        sourceUrl: 'https://www.moma.org/collection/works/401577',
        images: [img('https://www.moma.org/media/W1siZiIsIjQwMTU3NyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Grid / Grid, 2010', '© Lucas Blalock', 'https://www.moma.org/collection/works/401577', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'Photography collection')]
      },
      {
        title: 'Both Chairs in CW’s Living Room', cluster: 'retouching misuse / domestic image', period: '2012',
        summary: '把商业修图软件中本来用于清理图像的操作反过来使用：像素重组、错误色彩修正和笨拙 masking 被故意留在表面，使“数字暗房”的机器动作成为主体。',
        actions: ['拍摄日常室内 / 椅子', '扫描或导入数字环境', '重组局部像素', '故意错误地进行色彩修正', '使用明显而不精细的 masking', '保留所有不自然接缝而不是修干净'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/650868', images: [],
        relations: [rel('收藏', 'The Metropolitan Museum of Art', 'Both Chairs in CW’s Living Room, 2012')]
      },
      {
        title: 'Shoe / Right Shoe', cluster: 'tabletop still life / software drawing', period: '2013',
        summary: '先在摄影棚把报纸、塑料饮料提环和量产帆布袋组成静物，再在电脑中给袋子添加类似鞋底纹的线条。作品故意让软件操作看起来像“画上去”，从而破坏摄影表面的纯净。',
        actions: ['在桌面安排报纸、塑料提环和帆布袋', '用摄影方式记录静物', '把图像导入电脑', '用软件给袋子增加鞋底式线条', '保留明显人工操作', '分别输出 Shoe 与 Right Shoe 形成配对'],
        sourceUrl: 'https://www.moma.org/explore/inside_out/2016/01/08/new-photography-and-momas-collection-part-1/',
        images: [
          img('https://www.moma.org/media/W1siZiIsIjQwMTU3OCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Right Shoe, 2013', '© Lucas Blalock', 'https://www.moma.org/artists/47094-lucas-blalock', 'MoMA'),
          img('https://www.moma.org/media/W1siZiIsIjQwMTU3OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Shoe, 2013', '© Lucas Blalock', 'https://www.moma.org/artists/47094-lucas-blalock', 'MoMA')
        ],
        relations: [rel('收藏', 'MoMA', 'Shoe / Right Shoe'), rel('展览', 'Ocean of Images: New Photography 2015 — MoMA', '2015–2016')]
      },
      {
        title: 'Picture for Mark II', cluster: 'photographic object / visible manipulation', period: '2013',
        summary: '与 Shoe 系列同期，继续把摄影对象和明显数字修改放在同一平面中；不是追求 Photoshop 的逼真，而是让修改本身拥有近似绘画笔触的存在感。',
        actions: ['拍摄实体对象', '数字化底片', '使用 Photoshop 进行局部复制 / 擦除 / 变形', '让修改区域保持可识别', '大尺寸喷墨输出'],
        sourceUrl: 'https://www.moma.org/artists/47094-lucas-blalock',
        images: [img('https://www.moma.org/media/W1siZiIsIjQwMTU4MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', 'Picture for Mark II, 2013', '© Lucas Blalock', 'https://www.moma.org/artists/47094-lucas-blalock', 'MoMA')],
        relations: [rel('收藏', 'MoMA', 'Picture for Mark II')]
      },
      {
        title: 'Studio still-life workflow', cluster: '4×5 film / scan / Photoshop', period: '2010s–',
        summary: 'Blalock 的基础制作系统本身就是一个持续项目：彩色无缝背景纸、织物、镜子和专业灯光先组成商业摄影式静物，再用 4×5 胶片拍摄、扫描，最后进入 Photoshop。关键在于软件操作故意不被抹平。',
        actions: ['在摄影棚搭建静物', '使用彩色无缝背景纸、织物、镜子和专业灯光', '使用 4×5 英寸胶片相机拍摄', '扫描胶片', '在 Photoshop 中 crop / flip / blur / clone / erase', '把通常服务于无缝广告图像的工具转成可见痕迹'],
        sourceUrl: 'https://www.lacma.org/guides/objects/27', images: [],
        relations: [rel('展览', 'New Pictures of Common Objects — MoMA PS1', '2012–2013')]
      },
      {
        title: 'Digital darkroom as drawing', cluster: 'software gesture / error / post-photography', period: '2010s–现在',
        summary: '他把鼠标、选区、复制图章、擦除和变形理解成类似绘画或素描的动作。数字工具不再只是摄影完成后的修饰，而是摄影内部的一套“手势”。',
        actions: ['把摄影当作初始材料而非最终图像', '重复局部信息', '制造明显接缝', '错误修补', '用数字动作改变对象轮廓和空间逻辑', '避免把痕迹修到不可见'],
        sourceUrl: 'https://www.metmuseum.org/art/collection/search/650868', images: [], relations: []
      },
      {
        title: 'Institutional context: New Photography / expanded photography', cluster: 'post-photography / museum context', period: '2012–2016',
        summary: 'Blalock 的方法被 MoMA、LACMA 与 Met 放进“摄影在数字时代如何暴露自身制作机制”的脉络中。作品同时保留模拟摄影、商业摄影棚和数字后期三套不同生产逻辑。',
        actions: ['模拟摄影与数字编辑并置', '使用普通商品 / 日常对象作为图像原料', '将软件界面逻辑转为视觉形式', '通过大型实体打印重新给予数字操作物质尺度'],
        sourceUrl: 'https://www.moma.org/artists/47094-lucas-blalock', images: [],
        relations: [rel('展览', 'Ocean of Images: New Photography 2015 — MoMA', '2015–2016'), rel('展览', 'New Pictures of Common Objects — MoMA PS1', '2012–2013')]
      }
    ],
    awards: [],
    exhibitions: ['New Pictures of Common Objects — MoMA PS1 2012–2013', 'Ocean of Images: New Photography 2015 — MoMA 2015–2016'],
    sources: [
      { label: 'MoMA — Lucas Blalock', url: 'https://www.moma.org/artists/47094-lucas-blalock' },
      { label: 'LACMA — Lucas Blalock process', url: 'https://www.lacma.org/guides/objects/27' },
      { label: 'The Met — Both Chairs in CW’s Living Room', url: 'https://www.metmuseum.org/art/collection/search/650868' },
      { label: 'MoMA — New Photography and collection', url: 'https://www.moma.org/explore/inside_out/2016/01/08/new-photography-and-momas-collection-part-1/' }
    ]
  }
};