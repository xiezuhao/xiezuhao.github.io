/***********************
 * 数据说明
 * 单位：
 * elderly: 万人
 * beds: 万张
 * facilities: 万个/万家（按页面展示口径）
 * supply: 每千名65岁及以上老人对应床位数
 * aging: 65岁及以上占比（%）
 ***********************/

/***********************
 * 1. 全国历史数据
 ***********************/
var nationalHistory = [
  { year: 2017, elderly: 15831, beds: null,  facilities: null, supply: null },
  { year: 2018, elderly: 16658, beds: null,  facilities: null, supply: null },
  { year: 2019, elderly: 17603, beds: null,  facilities: null, supply: null },
  { year: 2020, elderly: 19064, beds: 821.0, facilities: 32.9, supply: 43.07 },
  { year: 2021, elderly: 20056, beds: null,  facilities: null, supply: null },
  { year: 2022, elderly: 20978, beds: null,  facilities: null, supply: null },
  { year: 2023, elderly: 21676, beds: 823.0, facilities: 40.4, supply: 37.97 },
  { year: 2024, elderly: 22023, beds: 799.3, facilities: 40.6, supply: 36.29 },
  { year: 2025, elderly: 22365, beds: null,  facilities: null, supply: null }
];

/***********************
 * 2. 全国预测数据
 ***********************/
var nationalForecast = [
  { year: 2025, elderly: 22804, beds: 810, facilities: 4.2 },
  { year: 2026, elderly: 23579, beds: 830, facilities: 4.3 },
  { year: 2027, elderly: 24348, beds: 850, facilities: 4.4 },
  { year: 2028, elderly: 25112, beds: 880, facilities: 4.5 },
  { year: 2029, elderly: 25869, beds: 910, facilities: 4.6 },
  { year: 2030, elderly: 26621, beds: 950, facilities: 4.7 }
];

/***********************
 * 3. 省级数据
 ***********************/
var provinceData = [
  { name:'北京', aging:13.30, elderly:null, beds:null, level:'较高' },
  { name:'天津', aging:14.75, elderly:null, beds:null, level:'较高' },
  { name:'河北', aging:13.92, elderly:null, beds:null, level:'较高' },
  { name:'山西', aging:12.90, elderly:null, beds:null, level:'中等' },
  { name:'内蒙古', aging:13.05, elderly:null, beds:null, level:'较高' },
  { name:'辽宁', aging:17.42, elderly:null, beds:null, level:'高' },
  { name:'吉林', aging:15.61, elderly:null, beds:null, level:'较高' },
  { name:'黑龙江', aging:15.61, elderly:null, beds:null, level:'较高' },
  { name:'上海', aging:16.28, elderly:null, beds:null, level:'高' },
  { name:'江苏', aging:16.20, elderly:null, beds:null, level:'高' },
  { name:'浙江', aging:13.27, elderly:null, beds:null, level:'较高' },
  { name:'安徽', aging:15.01, elderly:null, beds:null, level:'较高' },
  { name:'福建', aging:11.10, elderly:null, beds:null, level:'中等' },
  { name:'江西', aging:11.89, elderly:null, beds:null, level:'中等' },
  { name:'山东', aging:15.13, elderly:null, beds:null, level:'较高' },
  { name:'河南', aging:13.49, elderly:null, beds:null, level:'较高' },
  { name:'湖北', aging:14.59, elderly:null, beds:null, level:'较高' },
  { name:'湖南', aging:14.81, elderly:null, beds:null, level:'较高' },
  { name:'广东', aging:8.58, elderly:null, beds:null, level:'较低' },
  { name:'广西', aging:12.20, elderly:null, beds:null, level:'中等' },
  { name:'海南', aging:10.43, elderly:null, beds:null, level:'中等' },
  { name:'重庆', aging:17.08, elderly:null, beds:null, level:'高' },
  { name:'四川', aging:16.93, elderly:null, beds:null, level:'高' },
  { name:'贵州', aging:11.56, elderly:null, beds:null, level:'中等' },
  { name:'云南', aging:10.75, elderly:null, beds:null, level:'中等' },
  { name:'西藏', aging:5.67, elderly:null, beds:null, level:'较低' },
  { name:'陕西', aging:13.32, elderly:null, beds:null, level:'较高' },
  { name:'甘肃', aging:12.58, elderly:null, beds:null, level:'中等' },
  { name:'青海', aging:8.68, elderly:null, beds:null, level:'较低' },
  { name:'宁夏', aging:9.62, elderly:null, beds:null, level:'较低' },
  { name:'新疆', aging:7.76, elderly:null, beds:null, level:'较低' }
];

/***********************
 * 4. 问答知识库
 ***********************/
var qaData = [
  {
    keywords: ['趋势', '历史'],
    answer: '从历史数据看，65岁及以上人口总体持续增长，说明我国老龄化程度不断加深，养老服务需求将长期存在。'
  },
  {
    keywords: ['预测', '未来'],
    answer: '预测结果显示，未来几年老龄人口仍将继续增加，养老资源需求会进一步上升，尤其是护理型和专业化资源需求。'
  },
  {
    keywords: ['老龄化'],
    answer: '老龄化率反映老年人口占总人口的比例。不同省份存在明显差异，东北、直辖市和部分中西部省份整体水平更高。'
  },
  {
    keywords: ['排名', '排行'],
    answer: '排行榜展示的是省级老龄化率高低，数值越高说明该地区人口老龄化程度越高，对养老服务资源的需求也通常更强。'
  },
  {
    keywords: ['地图'],
    answer: '地图模块展示了省际老龄化率的空间分布情况，颜色越深表示指标越高，并可与右侧详情和排行榜联动查看。'
  },
  {
    keywords: ['安徽'],
    answer: '安徽老龄化率较高，建议重点完善县域养老服务中心、乡镇站点、护理型床位和医养结合资源配置。'
  }
];

/***********************
 * 5. 页面兼容变量
 ***********************/
var years = nationalHistory.map(function(i){ return i.year; });
var elderly65 = nationalHistory.map(function(i){ return i.elderly; });

var supplyYears = nationalHistory
  .filter(function(i){ return i.supply !== null; })
  .map(function(i){ return i.year; });

var supplyPer1000 = nationalHistory
  .filter(function(i){ return i.supply !== null; })
  .map(function(i){ return i.supply; });

var forecastYears = nationalForecast.map(function(i){ return i.year; });
var elderlyForecast = nationalForecast.map(function(i){ return i.elderly; });
var bedForecast = nationalForecast.map(function(i){ return i.beds; });
var orgForecast = nationalForecast.map(function(i){ return i.facilities; });

var top10 = provinceData
  .slice()
  .sort(function(a,b){ return b.aging - a.aging; })
  .slice(0,10);

var kpi = {
  org: 4.1,
  beds: 799.3,
  aging: 15.6,
  elderly2030: 26621
};
