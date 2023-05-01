function rest(mth, bdy, idPatch) {
  const url = `https://46.242.15.52:5000/card${idPatch ? '/' + idPatch : ''}`
  return fetch(url, {
    method: mth,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bdy)
  }).then((res) => res.json()).catch((err) => alert(err));
}

export default rest;