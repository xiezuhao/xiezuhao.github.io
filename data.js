// ======================
// 全国时间序列数据（2014–2025）
// ======================

let years = [
2014,2015,2016,2017,2018,2019,
2020,2021,2022,2023,2024,2025
];

// 养老机构数量（万）
let orgData = [
3.3,3.4,3.5,3.7,3.8,3.9,
4.1,4.2,4.3,4.2,4.0,3.9
];

// 养老床位数（万）
let bedData = [
578,672,720,750,780,800,
820,830,840,820,790,768
];

// 老龄化率（%）
let agingData = [
10.1,10.5,10.8,11.4,11.9,12.6,
13.5,14.2,14.9,15.4,15.8,16.2
];


// ======================
// ARIMA预测数据（2026–2030）
// ======================

let forecastYears = [2025,2026,2027,2028,2029,2030];

// 机构预测（示意，可后续替换真实模型）
let orgForecast = [
3.9,4.0,4.1,4.2,4.3,4.4
];

// 床位预测（万）
let bedForecast = [
768,780,800,820,850,880
];


// ======================
// 全国31省数据（地图用）
// ======================

let provinceData = [
{name:'北京',value:85},
{name:'天津',value:70},
{name:'河北',value:125},
{name:'山西',value:80},
{name:'内蒙古',value:75},

{name:'辽宁',value:95},
{name:'吉林',value:80},
{name:'黑龙江',value:90},

{name:'上海',value:100},
{name:'江苏',value:115},
{name:'浙江',value:110},
{name:'安徽',value:85},

{name:'福建',value:90},
{name:'江西',value:80},
{name:'山东',value:135},

{name:'河南',value:150},
{name:'湖北',value:105},
{name:'湖南',value:95},

{name:'广东',value:160},
{name:'广西',value:85},
{name:'海南',value:60},

{name:'重庆',value:75},
{name:'四川',value:145},
{name:'贵州',value:80},
{name:'云南',value:85},

{name:'西藏',value:30},
{name:'陕西',value:95},
{name:'甘肃',value:70},
{name:'青海',value:40},
{name:'宁夏',value:50},
{name:'新疆',value:80}
];


// ======================
// 排名数据（自动生成Top10）
// ======================

let top10 = [...provinceData]
.sort((a,b)=>b.value-a.value)
.slice(0,10);


// ======================
// KPI数据（自动取最新）
// ======================

let kpi = {
org: orgData[orgData.length-1],
beds: bedData[bedData.length-1],
aging: agingData[agingData.length-1]
};
