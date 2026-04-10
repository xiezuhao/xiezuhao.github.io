/***********************
 * 养老资源数据分析平台
 * 单位说明：
 * total / age60 / age65：万人
 * beds：万张
 * facilities：万个
 * supply：每千名65岁及以上老人对应床位数
 * agingRate65：65岁及以上人口占比（%）
 ***********************/

/***********************
 * 1. 全国历史数据
 ***********************/
var nationalHistory = [
  { year: 2017, total: 139008, age60: 24090, age65: 15831, agingRate65: 11.4, beds: null,  facilities: null, supply: null },
  { year: 2018, total: 139538, age60: 24949, age65: 16658, agingRate65: 11.9, beds: null,  facilities: null, supply: null },
  { year: 2019, total: 140005, age60: 25388, age65: 17603, agingRate65: 12.6, beds: null,  facilities: null, supply: null },
  { year: 2020, total: 141212, age60: 26402, age65: 19064, agingRate65: 13.5, beds: 821.0, facilities: 32.9, supply: 43.07 },
  { year: 2021, total: 141260, age60: 26736, age65: 20056, agingRate65: 14.2, beds: null,  facilities: null, supply: null },
  { year: 2022, total: 141175, age60: 28004, age65: 20978, agingRate65: 14.9, beds: null,  facilities: null, supply: null },
  { year: 2023, total: 140967, age60: 29697, age65: 21676, agingRate65: 15.4, beds: 823.0, facilities: 40.4, supply: 37.97 },
  { year: 2024, total: 140828, age60: 31031, age65: 22023, agingRate65: 15.6, beds: 799.3, facilities: 40.6, supply: 36.29 },
  { year: 2025, total: 140489, age60: 32338, age65: 22365, agingRate65: 15.9, beds: null,  facilities: null, supply: null }
];

/***********************
 * 2. 全国预测数据（展示版）
 ***********************/
var nationalForecast = [
  { year: 2025, age65: 22804, beds: 810, facilities: 4.2 },
  { year: 2026, age65: 23579, beds: 830, facilities: 4.3 },
  { year: 2027, age65: 24348, beds: 850, facilities: 4.4 },
  { year: 2028, age65: 25112, beds: 880, facilities: 4.5 },
  { year: 2029, age65: 25869, beds: 910, facilities: 4.6 },
  { year: 2030, age65: 26621, beds: 950, facilities: 4.7 }
];

/***********************
 * 3. 省级数据（第七次人口普查 65+占比）
 ***********************/
var provinceData = [
  { name:'北京', aging:13.30, level:'较高' },
  { name:'天津', aging:14.75, level:'较高' },
  { name:'河北', aging:13.92, level:'较高' },
  { name:'山西', aging:12.90, level:'中等' },
  { name:'内蒙古', aging:13.05, level:'较高' },
  { name:'辽宁', aging:17.42, level:'高' },
  { name:'吉林', aging:15.61, level:'较高' },
  { name:'黑龙江', aging:15.61, level:'较高' },
  { name:'上海', aging:16.28, level:'高' },
  { name:'江苏', aging:16.20, level:'高' },
  { name:'浙江', aging:13.27, level:'较高' },
  { name:'安徽', aging:15.01, level:'较高' },
  { name:'福建', aging:11.10, level:'中等' },
  { name:'江西', aging:11.89, level:'中等' },
  { name:'山东', aging:15.13, level:'较高' },
  { name:'河南', aging:13.49, level:'较高' },
  { name:'湖北', aging:14.59, level:'较高' },
  { name:'湖南', aging:14.81, level:'较高' },
  { name:'广东', aging:8.58, level:'较低' },
  { name:'广西', aging:12.20, level:'中等' },
  { name:'海南', aging:10.43, level:'中等' },
  { name:'重庆', aging:17.08, level:'高' },
  { name:'四川', aging:16.93, level:'高' },
  { name:'贵州', aging:11.56, level:'中等' },
  { name:'云南', aging:10.75, level:'中等' },
  { name:'西藏', aging:5.67, level:'较低' },
  { name:'陕西', aging:13.32, level:'较高' },
  { name:'甘肃', aging:12.58, level:'中等' },
  { name:'青海', aging:8.68, level:'较低' },
  { name:'宁夏', aging:9.62, level:'较低' },
  { name:'新疆', aging:7.76, level:'较低' }
];

/***********************
 * 4. 问答知识库
 ***********************/
var qaData = [
  {
    keywords: ['趋势','历史'],
    answer: '从历史数据看，60岁及以上和65岁及以上人口都在持续增长，说明我国老龄化程度不断加深，养老服务需求具有长期增长趋势。'
  },
  {
    keywords: ['预测','未来'],
    answer: '预测结果显示，未来几年65岁及以上人口仍将继续增加，养老床位和机构资源需要持续优化，尤其是护理型服务。'
  },
  {
    keywords: ['老龄化'],
    answer: '老龄化率反映老年人口占比。不同省份之间存在明显差异，东北、直辖市和部分中西部地区整体水平更高。'
  },
  {
    keywords: ['排名','排行'],
    answer: '排行榜显示的是省级65岁及以上人口占比，数值越高说明该地区老龄化程度越高，对养老资源配置要求也通常更强。'
  },
  {
    keywords: ['地图'],
    answer: '地图模块展示了各省老龄化率的空间分布情况，颜色越深表示指标越高，并可与右侧详情和排行榜联动查看。'
  },
  {
    keywords: ['安徽'],
    answer: '安徽老龄化率较高，建议重点完善县域养老服务中心、乡镇站点、护理型床位和医养结合资源配置。'
  }
];

/***********************
 * 5. 数据来源说明（页面底部展示）
 ***********************/
var sourceList = [
  '国家统计局《2017—2025年国民经济和社会发展统计公报》：全国总人口、60岁及以上人口、65岁及以上人口、老龄化率',
  '第七次全国人口普查公报（第五号）：31省65岁及以上人口占比',
  '《“十四五”国家老龄事业发展和养老服务体系规划》：2020年养老床位和养老机构设施数据',
  '《2023年度国家老龄事业发展公报》：2023年养老床位和养老机构设施数据',
  '《2024年度国家老龄事业发展公报》：2024年养老床位和养老机构设施数据',
  '2025—2030年预测数据为平台展示版，用于可视化演示，可后续替换为你的正式ARIMA结果'
];

/***********************
 * 6. 兼容页面用变量
 ***********************/
var years = nationalHistory.map(function(i){ return i.year; });
var totalPop = nationalHistory.map(function(i){ return i.total; });
var age60Data = nationalHistory.map(function(i){ return i.age60; });
var age65Data = nationalHistory.map(function(i){ return i.age65; });
var agingRate65Data = nationalHistory.map(function(i){ return i.agingRate65; });

var bedsYears = nationalHistory.filter(function(i){ return i.beds !== null; }).map(function(i){ return i.year; });
var bedsData = nationalHistory.filter(function(i){ return i.beds !== null; }).map(function(i){ return i.beds; });

var facilitiesYears = nationalHistory.filter(function(i){ return i.facilities !== null; }).map(function(i){ return i.year; });
var facilitiesData = nationalHistory.filter(function(i){ return i.facilities !== null; }).map(function(i){ return i.facilities; });

var supplyYears = nationalHistory.filter(function(i){ return i.supply !== null; }).map(function(i){ return i.year; });
var supplyPer1000 = nationalHistory.filter(function(i){ return i.supply !== null; }).map(function(i){ return i.supply; });

var forecastYears = nationalForecast.map(function(i){ return i.year; });
var elderlyForecast = nationalForecast.map(function(i){ return i.age65; });
var bedForecast = nationalForecast.map(function(i){ return i.beds; });
var orgForecast = nationalForecast.map(function(i){ return i.facilities; });

var top10 = provinceData.slice().sort(function(a,b){ return b.aging - a.aging; }).slice(0,10);

var kpi = {
  facilities2024: 40.6,
  beds2024: 799.3,
  aging2024: 15.6,
  elderly2030: 26621
};
