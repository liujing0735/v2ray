var obj = JSON.parse($response.body);

obj.data.vip_type=1;
obj.data.expire_days=-9999999999;
obj.data.screen_name="山河无恙";
obj.data.is_expire=0;
obj.data.in_valid_time=4076488923;
obj.data.is_valid_user=1;
obj.data.valid_time=4076488923;
obj.data.home_prompt="山河无恙";
obj.data.home_btn_prompt="SVIP";

$done({ body: JSON.stringify(obj) });
