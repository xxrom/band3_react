function fetchTimeout(url, options, timeout = 3000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout)
    ),
  ]);
}

function fetchData({
  fetchTime = 3000,
  url = '',
  id = '',
  web = '',
  fetchOptionsMethod = 'GET',
  fetchOptionsHeader = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body = null,
  thenFunction = ({ data }) => data,
}) {
  if (!web) {
    // by default => send to heroku
    web = `https://band3-koa2.herokuapp.com/`;
    // let web = `http://localhost:3334/`;
    // let web = `http://localhost:4444/`;
    // web = `http://192.168.0.121:4444`;
  }

  const fullUrl = `${web}${url}${id}`;
  console.log(`fullUrl ${fullUrl}`);

  const fetchDefaultOptions = {
    method: fetchOptionsMethod,
    headers: fetchOptionsHeader,
  };
  let fetchDynamicOptions = body ? { body: JSON.stringify(body) } : {};

  return fetchTimeout(
    fullUrl,
    {
      ...fetchDefaultOptions,
      ...fetchDynamicOptions,
    },
    fetchTime
  )
    .then((res) => {
      console.log('res', res);
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
