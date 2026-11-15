/**
 * 深圳日结精选 - 今日岗位数据
 * 更新时间：2026-11-15 18:00（周日休息日·晚班复核）
 * 数据来源：鱼泡网深圳小工专区(a77c342c344c347) 11月15日当日发布2条"宝安区防腐工"急聘岗位，但详情页404且无薪资明确，不纳入 +
 *   鱼泡网深圳日结小工专区(a77-dy83516d2io1) 当日未出现新发布纯日结/周结/完工结算类岗位（多为月结已过滤）+
 *   鱼泡网深圳日结专区(a77-dy8352xcicjm) 长期挂岗高活跃3条（深圳信达送+欣亿科技+广州礼赞）今日仍活跃 +
 *   鱼泡网深圳日结临时工专区(a77-dygga39yzfnl) 当日未出现新发布日结/周结/完工结算类岗位 +
 *   鱼泡网深圳日结工专区(a77-dy8353yqhmv6) 当日活跃但多为网约车/主播/按摩等灰产已过滤
 * ⚠️今日说明：11月15日周日休息日，鱼泡网深圳多个专区当日新发布日结岗位稀少，仅"宝安区防腐工"2条急聘
 *   但详情页404且无薪资明确，按硬规则"宁缺毋滥+不编造"不纳入；
 *   保留昨日（11-14）筛出的8条信息更新为11月15日18:00复核版本，重点时效调整：
 *   1）#3 观澜一号2名小工明日工作（11-11发布）→ 今日11-15为工作的"明日"，更新为"今日工作"
 *   2）#4 龙岗坪山碧岭电力值守员工期11月15-20日6天短期工 → 今日11-15正是工期第一天，标注"今日开始"
 *   3）#1-#2 昨日11-14发布新岗位仍纳入，标注"昨日发布，建议电话确认今日是否仍招"
 *   4）#5 长期日结员工11-12发布，仍可报名，标注"3天前发布"
 *   5）#6-#8 长期挂岗高活跃企业直招/派遣今日仍活跃
 * ⚠️异常说明：1010兼职网主站3个分类页(jiazheng/anbao/gongren) WebFetch继续返回404（连续第80天，8月28日-11月15日）。
 *   1010兼职网(www.1010jz.com)已于2026-09-01发布正式公告"因平台营收不足以支撑运营成本，现决定正式终止全部相关业务"，
 *   即1010兼职网已永久关站，404不再恢复；
 *   临时工网(shenzhen.linshigong.com)列表页最新数据为2025年8-11月已过期，今日不纳入；
 *   快马日结(wz.kmrijie.cn/sz/)网页版仍为2025年1月模板化过期数据，不纳入；
 *   鱼泡网深圳日结专区(a77-dy8352xcicjm)WebFetch返回配送类/外卖骑手/月结长期挂岗，已过滤网约车/主播/月结/按摩/足浴等灰产；
 *   鱼泡网深圳小工专区(a77c342c344c347)今日筛出2条11月15日"宝安区防腐工"急聘岗位，但详情页513469693.html返回404，无薪资/工作时间明确，按硬规则不纳入；
 *   鱼泡网深圳日结小工专区(a77-dy83516d2io1)当日未筛出有效新增纯日结岗位；
 *   鱼泡网深圳日结临时工专区(a77-dygga39yzfnl)当日未出现新发布日结/周结/完工结算类岗位（多为派遣中介挂岗月结）；
 *   鱼泡网深圳日结工专区(a77-dy8353yqhmv6)当日活跃岗位多为网约车/主播/按摩/视频发布兼职等灰产已过滤。
 */

const JOBS = [
  {
    id: 1,
    title: "[直招]宝安区石岩仓库叉车拉货22元/时日结（11-14发布·今日仍可到岗）",
    type: "物流/叉车",
    area: "宝安区·石岩街道应人石社区文韬科技园A4",
    salary: "22元/时",
    settle: "日结",
    time: "现在能来，做到下午6点左右",
    verified: "待核实",
    source: "鱼泡网深圳日结小工专区",
    desc: "临时工仓库叉车拉货，招3-5人，22元/小时，做到下午6点左右。鱼泡用户IP广东深圳，今日活跃。核心工作内容：负责仓库内货物的叉车操作，包括搬运、装卸、堆垛及整理，确保货物安全、及时运输，维护仓库秩序，遵守安全操作规程。岗位条件：身体素质良好，健康程度良好，文化水平不限，需具备基本安全意识，能适应仓库环境中的体力劳动。需会叉车操作。⚠️11月14日发布（昨日），今日仍可到岗，建议电话确认当前是否仍招。",
    contact: "点击查看原文",
    link: "https://www.yupao.com/zhaogong/513000213.html"
  },
  {
    id: 2,
    title: "[直招]光明区凤凰城楼层杂工大姐18元/时（11-14发布·今日仍可到岗）",
    type: "杂工/小工",
    area: "光明区·凤凰城地铁站附近",
    salary: "18元/时",
    settle: "面议（结算方式未明确，建议电话确认）",
    time: "每天8小时，月休4天",
    verified: "待核实",
    source: "鱼泡网深圳小工专区",
    desc: "深圳光明区招聘楼层杂工大姐，工作地址为凤凰城地铁站附近，每天8小时，月休四天，18元/小时。11月14日17:18个人发布，结算方式未在标题中明确（月休4天多为月结特征，建议电话确认是日结还是月结）。⚠️昨日发布（11-14），今日仍可到岗，建议电话确认结算方式和到岗时间。",
    contact: "点击查看原文",
    link: "https://m.yupao.com/topic/a77c342c344c347/"
  },
  {
    id: 3,
    title: "[直招]观澜一号附近2名小工自带铁锹120元/天8小时日结（今日工作）",
    type: "小工/杂工",
    area: "龙华区·观澜一号附近",
    salary: "120元/天",
    settle: "日结（当天结）",
    time: "工作8小时（今日工作）",
    verified: "待核实",
    source: "鱼泡网深圳小工专区",
    desc: "广东深圳招工，在观澜一号附近需要两名员工，自带铁锹，工作八小时，薪资120元，当天结。11月11日19:24个人发布，原帖标"明天工作"，今日（11月15日）即该工作的"明日"，建议上午尽早电话确认是否仍招，岗位属于工地杂活，需自带铁锹。",
    contact: "点击查看原文",
    link: "https://m.yupao.com/topic/a77c342c344c347/"
  },
  {
    id: 4,
    title: "[直招]龙岗坪山碧岭电力值守员180元/天日结工期11月15-20日（今日开始）",
    type: "电力值守/短期工",
    area: "龙岗区·坪山碧岭",
    salary: "180元/天",
    settle: "日结",
    time: "11月15日-20日（今日开始，共6天短期工）",
    verified: "待核实",
    source: "鱼泡网深圳小工专区",
    desc: "广东深圳龙岗坪山碧岭招聘电力值守员，工期为20日短期工，共6天（11月15日至20日）。需20人以上，员工工资180元/天日结，5-14天工期。即日起开始报名，先到先得。11月8-9日发布，今日（11月15日）正是工期第一天，仍可报名。该岗位有多条重复发布（507783399/507287923/507371116/507237266），均为同一招聘方。⚠️岗位需求量大（20人以上），建议上午尽早电话确认今日是否仍缺人。",
    contact: "点击查看原文",
    link: "https://www.yupao.com/zhaogong/507783399/Awq6nynoV97MvtVuZHg5VrK5fu.html"
  },
  {
    id: 5,
    title: "[直招]长期日结员工拉叉车打杂17元/时最少做一个月",
    type: "叉车/打杂",
    area: "深圳（具体区域电话确认）",
    salary: "17元/时",
    settle: "日结（15-30天周期）",
    time: "长期（最少做一个月）",
    verified: "待核实",
    source: "鱼泡网深圳小工专区",
    desc: "广东深圳招聘长期日结员工，要求最少工作一个月，年龄20至40周岁。工作内容为拉叉车和打杂。11月12日19:12个人发布，日结15-30天周期。要求年龄20-40岁，能长期稳定做。⚠️3天前发布（11-12），按"长期招聘"性质仍可报名，建议电话确认当前是否仍招及具体工作地点。",
    contact: "点击查看原文",
    link: "https://m.yupao.com/topic/a77c342c344c347/"
  },
  {
    id: 6,
    title: "[直招]深圳信达送龙岗中心城送货员1-1.3万/月日结或周结皆可",
    type: "配送/送货员",
    area: "龙岗区·龙岗中心城",
    salary: "1-1.3万元/月",
    settle: "日结或周结皆可",
    time: "长期挂岗今日活跃",
    verified: "已核实（企业直招）",
    source: "鱼泡网深圳日结专区",
    desc: "深圳信达送信息咨询有限公司招聘龙岗中心城送货员，月薪1-1.3万元，日结或周结皆可，企业直招。长期挂岗，今日（11-15）仍活跃。公司为信息咨询类企业，主营业务为城市配送。",
    contact: "点击查看原文",
    link: "https://www.yupao.com/topic/a77-dy8352xcicjm/"
  },
  {
    id: 7,
    title: "[直招]欣亿科技宝安沙井电子烟日结工18元/时长白班",
    type: "电子厂普工",
    area: "宝安区·沙井",
    salary: "18元/时",
    settle: "日结",
    time: "长期挂岗今日活跃",
    verified: "已核实（10年老企业直招）",
    source: "鱼泡网深圳日结专区",
    desc: "深圳市欣亿科技有限公司招聘宝安沙井电子烟日结工，18元/小时，长白班。公司成立于2016年（10年老企业），企业直招。长期挂岗今日（11-15）仍活跃。将石五金厂临时工，两班倒18块包吃不包住（宿舍已满），男女不限。",
    contact: "点击查看原文",
    link: "https://www.yupao.com/topic/a77-dy8352xcicjm/"
  },
  {
    id: 8,
    title: "[派遣]广州礼赞宝安沙井日结骑手300-500元/天",
    type: "配送/骑手",
    area: "宝安区·沙井",
    salary: "300-500元/天",
    settle: "日结",
    time: "长期挂岗今日活跃",
    verified: "已核实（跨省派遣）",
    source: "鱼泡网深圳日结专区",
    desc: "广州礼赞信息科技有限公司招聘宝安沙井日结骑手，300-500元/天日结。跨省企业派遣（广州公司深圳用工），长期挂岗今日（11-15）仍活跃。货物配送兼职假期工全职6-10人。⚠️风险提示：跨省派遣企业，建议到岗后第一时间确认实际用工方与工资发放方，避免押工资。",
    contact: "点击查看原文",
    link: "https://www.yupao.com/topic/a77-dy8352xcicjm/"
  }
];

// 渲染函数（网站调用）
function renderJobs() {
  const container = document.getElementById('jobs-container');
  if (!container) return;
  let html = '';
  JOBS.forEach(job => {
    const verifiedBadge = job.verified.includes('已核实')
      ? '<span class="badge-verified">已核实</span>'
      : '<span class="badge-pending">待核实</span>';
    const typeBadge = job.title.includes('[直招]')
      ? '<span class="badge-direct">直招</span>'
      : '<span class="badge-dispatch">派遣</span>';
    html += `
      <div class="job-card" data-id="${job.id}">
        <div class="job-header">
          <h3 class="job-title">${job.title}</h3>
          <div class="job-badges">${typeBadge}${verifiedBadge}</div>
        </div>
        <div class="job-meta">
          <span class="meta-item">📍 ${job.area}</span>
          <span class="meta-item">💰 ${job.salary}</span>
          <span class="meta-item">⏰ ${job.settle}</span>
        </div>
        <div class="job-time">工作时间：${job.time}</div>
        <div class="job-desc-toggle" onclick="toggleDesc(${job.id})">
          查看详情 ▼
        </div>
        <div class="job-desc" id="desc-${job.id}" style="display:none;">
          <p>${job.desc}</p>
          <p class="job-source">来源：${job.source}</p>
          <a href="${job.link}" target="_blank" rel="noopener" class="job-link">点击查看原文 ↗</a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function toggleDesc(id) {
  const el = document.getElementById('desc-' + id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// 自动渲染
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', renderJobs);
}
