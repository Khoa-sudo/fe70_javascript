const main = () => {
  const address = document.getElementById("txtAddress").value;
  console.log(address);

  //sùng superagent call api của google, lấy toạ độ của địa chỉ người dùng nhập
  superagent
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`
    )
    .end((err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      const { lat, lng } = res.body.result[0].geometry.location;
      console.log(lat, lng);
    });
};

//sử dụng thư viện superAgentJs
