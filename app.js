const dataSource = window.platformData;

const fmt = (num, digits = 0) => {
  if (typeof num !== 'number') return num;
  return num.toLocaleString('zh-CN', { maximumFractionDigits: digits, minimumFractionDigits: digits });
};

const latest = (arr) => arr[arr.length - 1];
const growth = (arr) => ((latest(arr) - arr[0]) / arr[0]) * 100;

function renderKpis() {
  const grid = document.getElementById('kpiGrid');
  const items = [
    {
      title: '2025年总人口',
      value: `${fmt(latest(dataSource.metrics.totalPopulation.data))}`,
      unit: dataSource.metrics.totalPopulation.unit,
      sub: `较2014年 ${growth(dataSource.metrics.totalPopulation.data) >= 0 ? '增长' : '下降'} ${fmt(Math.abs(growth(dataSource.metrics.totalPopulation.data)), 2)}%`
    },
    {
      title: '2025年65岁以上人口',
      value: `${fmt(latest(dataSource.metrics.elder65.data))}`,
      unit: dataSource.metrics.elder65.unit,
      sub: `较2014年增长 ${fmt(growth(dataSource.metrics.elder65.data), 2)}%`
    },
    {
      title: '2025年老龄化比例',
      value: `${fmt(latest(dataSource.metrics.agingRate.data), 1)}`,
      unit: '%',
      sub: `较2014年提高 ${fmt(latest(dataSource.metrics.agingRate.data) - dataSource.metrics.agingRate.data[0], 1)} 个百分点`
    },
    {
      title: '2025年养老床位数',
      value: `${fmt(latest(dataSource.metrics.bedCount.data))}`,
      unit: dataSource.metrics.bedCount.unit,
      sub: `峰值出现在 2022 年：${fmt(Math.max(...dataSource.metrics.bedCount.data))} ${dataSource.metrics.metrics?.bedCount?.unit || '万张'}`
    }
  ];

  grid.innerHTML = items.map(item => `
    <article class="glass card kpi-card">
      <div class="kpi-title">${item.title}</div>
      <div class="kpi-value">${item.value}<span>${item.unit}</span></div>
      <div class="kpi-sub">${item.sub}</div>
    </article>
  `).join('');
}

function buildPopulationChart(view = 'dual') {
  const chart = echarts.init(document.getElementById('populationChart'));
  const baseSeries = [];
  if (view === 'dual') {
    baseSeries.push(
      {
        name: '65岁以上人口',
        type: 'line',
        smooth: true,
        data: dataSource.metrics.elder65.data,
        symbolSize: 8,
        areaStyle: { opacity: 0.18 }
      },
      {
        name: '老龄化比例',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        data: dataSource.metrics.agingRate.data,
        symbolSize: 8
      }
    );
  } else {
    baseSeries.push({
      name: '老龄化比例',
      type: 'line',
      smooth: true,
      data: dataSource.metrics.agingRate.data,
      symbolSize: 8,
      areaStyle: { opacity: 0.18 }
    });
  }

  chart.setOption({
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: { top: 8, textStyle: { color: '#dce7ff' } },
    grid: { left: 42, right: 42, top: 54, bottom: 34 },
    xAxis: {
      type: 'category',
      data: dataSource.years,
      axisLine: { lineStyle: { color: 'rgba(255,255,255,.28)' } },
      axisLabel: { color: '#dbe8ff' }
    },
    yAxis: view === 'dual' ? [
      {
        type: 'value',
        name: '人口（万人）',
        axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,.08)' } },
        axisLabel: { color: '#dbe8ff' }
      },
      {
        type: 'value',
        name: '比例（%）',
        axisLine: { show: false },
        splitLine: { show: false },
        axisLabel: { color: '#dbe8ff' }
      }
    ] : {
      type: 'value',
      name: '比例（%）',
      axisLine: { show: false },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,.08)' } },
      axisLabel: { color: '#dbe8ff' }
    },
    series: baseSeries
  });

  window.addEventListener('resize', () => chart.resize());
}

function buildResourceChart() {
  const chart = echarts.init(document.getElementById('resourceChart'));
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { top: 8, textStyle: { color: '#dce7ff' } },
    grid: { left: 42, right: 24, top: 54, bottom: 34 },
    xAxis: {
      type: 'category',
      data: dataSource.years,
      axisLine: { lineStyle: { color: 'rgba(255,255,255,.28)' } },
      axisLabel: { color: '#dbe8ff' }
    },
    yAxis: [
      {
        type: 'value',
        name: '机构（万个）',
        axisLabel: { color: '#dbe8ff' },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,.08)' } }
      },
      {
        type: 'value',
        name: '床位（万张）',
        axisLabel: { color: '#dbe8ff' },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '养老机构数量',
        type: 'bar',
        barMaxWidth: 22,
        data: dataSource.metrics.institutionCount.data
      },
      {
        name: '养老机构床位数',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        data: dataSource.metrics.bedCount.data,
        symbolSize: 7
      }
    ]
  });
  window.addEventListener('resize', () => chart.resize());
}

function buildForecastChart() {
  const chart = echarts.init(document.getElementById('forecastChart'));
  chart.setOption({
    tooltip: { trigger: 'axis' },
    legend: { top: 8, textStyle: { color: '#dce7ff' } },
    grid: { left: 42, right: 24, top: 54, bottom: 34 },
    xAxis: {
      type: 'category',
      data: dataSource.forecast.years,
      axisLine: { lineStyle: { color: 'rgba(255,255,255,.28)' } },
      axisLabel: { color: '#dbe8ff' }
    },
    yAxis: [
      {
        type: 'value',
        name: '比例（%）/ 机构（万个）',
        axisLabel: { color: '#dbe8ff' },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,.08)' } }
      },
      {
        type: 'value',
        name: '人口/床位',
        axisLabel: { color: '#dbe8ff' },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '老龄化比例（演示）',
        type: 'line',
        smooth: true,
        data: dataSource.forecast.agingRate,
        symbolSize: 8
      },
      {
        name: '养老机构数量（演示）',
        type: 'line',
        smooth: true,
        data: dataSource.forecast.institutionCount,
        symbolSize: 8
      },
      {
        name: '65岁以上人口（演示）',
        type: 'bar',
        yAxisIndex: 1,
        barMaxWidth: 24,
        data: dataSource.forecast.elder65
      }
    ]
  });
  window.addEventListener('resize', () => chart.resize());
}

function renderInsights() {
  const target = document.getElementById('insightList');
  const agingGap = latest(dataSource.metrics.agingRate.data) - dataSource.metrics.agingRate.data[0];
  const elderGrowth = growth(dataSource.metrics.elder65.data);
  const maxBeds = Math.max(...dataSource.metrics.bedCount.data);
  const maxBedsYear = dataSource.years[dataSource.metrics.bedCount.data.indexOf(maxBeds)];

  const items = [
    `2014—2025 年，65岁及以上人口由 ${fmt(dataSource.metrics.elder65.data[0])} 万人增长到 ${fmt(latest(dataSource.metrics.elder65.data))} 万人，累计增长 ${fmt(elderGrowth, 2)}%。`,
    `老龄化比例从 ${fmt(dataSource.metrics.agingRate.data[0], 1)}% 提升到 ${fmt(latest(dataSource.metrics.agingRate.data), 1)}%，提高 ${fmt(agingGap, 1)} 个百分点。`,
    `养老机构床位数在 ${maxBedsYear} 年达到阶段峰值 ${fmt(maxBeds)} 万张，之后出现一定回落。`,
    `养老机构数量总体在 4 万个上下波动，说明未来更值得关注结构优化与服务质量提升。`
  ];

  target.innerHTML = items.map(text => `<div class="insight-item">${text}</div>`).join('');
}

function renderForecastList() {
  const target = document.getElementById('forecastList');
  target.innerHTML = [
    ['2026年老龄化比例（演示）', `${fmt(dataSource.forecast.agingRate[0], 2)}%`],
    ['2030年老龄化比例（演示）', `${fmt(latest(dataSource.forecast.agingRate), 2)}%`],
    ['2026年65岁以上人口（演示）', `${fmt(dataSource.forecast.elder65[0], 2)} 万人`],
    ['2030年65岁以上人口（演示）', `${fmt(latest(dataSource.forecast.elder65), 2)} 万人`],
  ].map(([label, value]) => `
    <div class="forecast-row">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join('');
}

function renderTable() {
  const table = document.getElementById('dataTable');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.innerHTML = `<tr><th>指标</th>${dataSource.years.map(y => `<th>${y}</th>`).join('')}</tr>`;

  const keys = [
    'totalPopulation','elder65','agingRate','institutionCount','bedCount',
    'gdpPerCapita','elder60','oldDependency','disposableIncome','medicalInstitutions','socialCareSpending'
  ];

  tbody.innerHTML = keys.map(key => {
    const metric = dataSource.metrics[key];
    return `
      <tr>
        <td>${metric.name}${metric.unit ? `（${metric.unit}）` : ''}</td>
        ${metric.data.map(v => `<td>${typeof v === 'number' ? fmt(v, Number.isInteger(v) ? 0 : 4).replace(/\.0000$/, '') : v}</td>`).join('')}
      </tr>`;
  }).join('');
}

function bindViewSwitch() {
  const chips = document.querySelectorAll('[data-pop-view]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      buildPopulationChart(chip.dataset.popView);
    });
  });
}

renderKpis();
buildPopulationChart('dual');
buildResourceChart();
buildForecastChart();
renderInsights();
renderForecastList();
renderTable();
bindViewSwitch();
