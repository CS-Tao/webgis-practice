import Mock from 'mockjs'

export default {
  // Get demo
  getDemo: config => {
    console.log('Mock: ' + config.url)
    return {
      time: Mock.mock('@datetime')
    }
  },
  // Post demo
  postDemo: config => {
    console.log('Mock: ' + config.url)
    return {
      time: Mock.mock('@datetime')
    }
  },
  // Get Top10
  getTop10: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {
        '省份': ['北京', '天津', '上海', '重庆', '武汉', '长沙', '南昌', '广州', '深圳', '珠海'],
        'aqi': [100, 90, 80, 90, 100, 100, 90, 80, 90, 100],
        'so2': [10, 20, 30, 20, 10, 10, 20, 30, 20, 10],
        '粉尘': [30, 40, 30, 20, 60, 30, 20, 30, 10, 90],
        'average': 110
      }
    }
  },
  // Post Top10
  postTop10: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {
        '省份': ['北京', '天津', '上海', '重庆', '武汉', '长沙', '南昌', '广州', '深圳', '珠海'],
        'aqi': [100, 90, 80, 90, 100, 100, 90, 80, 90, 100],
        'so2': [10, 20, 30, 20, 10, 10, 20, 30, 20, 10],
        '粉尘': [30, 40, 30, 20, 60, 30, 20, 30, 10, 90],
        'average': 110
      }
    }
  },
  // Get Top10
  getCalender: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {
        'range': ['2016-01-01', '2016-01-30'],
        'data': [['2016-01-01', 11], ['2016-01-02', 12], ['2016-01-03', 13],
          ['2016-01-04', 11], ['2016-01-05', 12], ['2016-01-06', 13],
          ['2016-01-07', 11], ['2016-01-08', 12], ['2016-01-09', 13],
          ['2016-01-10', 11], ['2016-01-11', 12], ['2016-01-12', 13],
          ['2016-01-13', 11], ['2016-01-14', 12], ['2016-01-15', 13],
          ['2016-01-16', 11], ['2016-01-17', 12], ['2016-01-18', 13],
          ['2016-01-19', 11], ['2016-01-20', 12], ['2016-01-21', 13],
          ['2016-01-22', 11], ['2016-01-23', 12], ['2016-01-24', 13],
          ['2016-01-25', 11], ['2016-01-26', 12], ['2016-01-27', 13],
          ['2016-01-28', 11], ['2016-01-29', 12], ['2016-01-30', 13]
        ]
      }
    }
  },
  // Post Top10
  postCalender: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {
        'range': ['2016-01-01', '2016-01-30'],
        'data': [['2016-01-01', 11], ['2016-01-02', 12], ['2016-01-03', 13],
          ['2016-01-04', 11], ['2016-01-05', 12], ['2016-01-06', 13],
          ['2016-01-07', 11], ['2016-01-08', 12], ['2016-01-09', 13],
          ['2016-01-10', 11], ['2016-01-11', 12], ['2016-01-12', 13],
          ['2016-01-13', 11], ['2016-01-14', 12], ['2016-01-15', 13],
          ['2016-01-16', 11], ['2016-01-17', 12], ['2016-01-18', 13],
          ['2016-01-19', 11], ['2016-01-20', 12], ['2016-01-21', 13],
          ['2016-01-22', 11], ['2016-01-23', 12], ['2016-01-24', 13],
          ['2016-01-25', 11], ['2016-01-26', 12], ['2016-01-27', 13],
          ['2016-01-28', 11], ['2016-01-29', 12], ['2016-01-30', 13]
        ]
      }
    }
  },
  // Get Index3
  getIndex3: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {'aqi': 100, 'so2': 6, '粉尘': 4}
    }
  },
  // Post Index3
  postIndex3: config => {
    console.log('Mock: ' + config.url)
    return {
      data: {'aqi': 100, 'so2': 6, '粉尘': 4}
    }
  }
}
