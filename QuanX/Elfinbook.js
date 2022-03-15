var obj = JSON.parse($response.body);

obj.data.vip=1;
obj.data.expire_timestamp=4076390251;
obj.data.nickname="山河无恙";
obj.data.expire_time="2099.03.05";

$done({ body: JSON.stringify(obj) });
