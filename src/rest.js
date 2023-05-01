function rest(mth, bdy, idPatch) {
  const url = `https://kanbanserverv2-adpol95.b4a.run/card${idPatch ? '/' + idPatch : ''}`
  return fetch(url, {
    method: mth,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bdy)
  }).then((res) => res.json()).catch((err) => alert(err));
}

export default rest;