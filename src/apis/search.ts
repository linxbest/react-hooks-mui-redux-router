

export function fetchList(params : object) {
    console.log('请求参数', params);

    let data = {
      product_trends: [ 
      {
          name: "hat",
          search_msv: [
            { date: "2015-9", sv: 161700 },
            { date: "2015-10", sv: 169950 },
            { date: "2021-6", sv: 353280 },
            { date: "2015-7", sv: 450000 },
          ],
        },
        {
          name: "hat2",
          search_msv: [
            { date: "2015-9", sv: 161700 },
            { date: "2015-10", sv: 169950 },
            { date: "2021-6", sv: 353280 },
            { date: "2015-7", sv: 450000 },
          ],
        },
        {
          name: "hat3",
          search_msv: [
            { date: "2015-9", sv: 161700 },
            { date: "2015-10", sv: 169950 },
            { date: "2021-6", sv: 353280 },
            { date: "2015-7", sv: 450000 },
          ],
        },
      ],
    }
    return new Promise<{ data: object }>((resolve) =>
      setTimeout(() => resolve({ data }), 500)
    );
  }
  