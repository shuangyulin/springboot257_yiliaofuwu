const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"药物剂型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJixing"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"科室管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKeshi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"药物类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYaopin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"医保类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYibao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"预约类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYishengYuyue"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"药物信息管理",
                        "menuJump":"列表",
                        "tableName":"yaopin"
                    }
                ],
                "menu":"药物信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"居民健康信息管理",
                        "menuJump":"列表",
                        "tableName":"jiankang"
                    }
                ],
                "menu":"居民健康信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"居民就诊管理",
                        "menuJump":"列表",
                        "tableName":"jiuzhen"
                    }
                ],
                "menu":"居民就诊管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"居民医保信息管理",
                        "menuJump":"列表",
                        "tableName":"yibao"
                    }
                ],
                "menu":"居民医保信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医生管理",
                        "menuJump":"列表",
                        "tableName":"yisheng"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医生预约管理",
                        "menuJump":"列表",
                        "tableName":"yishengYuyue"
                    }
                ],
                "menu":"医生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"药物信息管理",
                        "menuJump":"列表",
                        "tableName":"yaopin"
                    }
                ],
                "menu":"药物信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"居民健康信息管理",
                        "menuJump":"列表",
                        "tableName":"jiankang"
                    }
                ],
                "menu":"居民健康信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"居民就诊管理",
                        "menuJump":"列表",
                        "tableName":"jiuzhen"
                    }
                ],
                "menu":"居民就诊管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"居民医保信息管理",
                        "menuJump":"列表",
                        "tableName":"yibao"
                    }
                ],
                "menu":"居民医保信息管理"
            }
            ,{
                "child":[
					{
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"医生预约管理",
                        "menuJump":"列表",
                        "tableName":"yishengYuyue"
                    }
                ],
                "menu":"医生预约管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"医生",
        "tableName":"yisheng"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"居民健康信息管理",
                        "menuJump":"列表",
                        "tableName":"jiankang"
                    }
                ],
                "menu":"居民健康信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"居民就诊管理",
                        "menuJump":"列表",
                        "tableName":"jiuzhen"
                    }
                ],
                "menu":"居民就诊管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"居民医保信息管理",
                        "menuJump":"列表",
                        "tableName":"yibao"
                    }
                ],
                "menu":"居民医保信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"医生管理",
                        "menuJump":"列表",
                        "tableName":"yisheng"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"医生预约管理",
                        "menuJump":"列表",
                        "tableName":"yishengYuyue"
                    }
                ],
                "menu":"医生管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
