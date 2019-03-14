function fetchData({
  url = '',
  id = '',
  fetchOptionsMethod = 'GET',
  fetchOptionsHeader = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body = null,
  thenFunction = ({ data }) => data,
}) {
  // let web = `http://localhost:3334/`;
  // let web = `https://band3-koa2.herokuapp.com/`;
  // let web = `http://localhost:4444/`;
  let web = `http://192.168.0.121:4444`;

  //   if (process.env.NODE_ENV !== 'development') {
  //     web = `https://my-diamond-postgresql.herokuapp.com/api/`;
  //   }

  const fullUrl = `${web}${url}${id}`;

  const fetchDefaultOptions = {
    method: fetchOptionsMethod,
    headers: fetchOptionsHeader,
  };
  let fetchDynamicOptions = body ? { body: JSON.stringify(body) } : {};

  return fetch(fullUrl, {
    ...fetchDefaultOptions,
    ...fetchDynamicOptions,
  })
    .then((res) => {
      console.log(
        `${fetchOptionsMethod}: ${web}${url}${id} // res status = ${
          res.status
        }`,
        res
      );
      return res.json();
    })
    .then(thenFunction)
    .catch((err) => console.log(err));
}

export { fetchData };
