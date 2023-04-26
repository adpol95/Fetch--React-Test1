function rest(mth, bdy, idPatch) {
  return fetch('https://kanbanserver-adpol95.b4a.run/card', {
    method: mth,
    headers: {
      'Content-Type': 'application/json'
    },
    body: bdy
  }).then((res) => res.json()).catch((err) => alert(err));
}

export default rest;