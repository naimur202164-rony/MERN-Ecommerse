class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword ?{

        name:{
            $regex:this.queryStr.keyword,
            $options:"i",

        }
    }:{};

    this.query=this.query.find({...keyword}) ;

    return  this;
  }

  filter(){
      const queryCopy={...this.queryStr};
      // Remove Some Filds
      const removeFileds  =["keyword","page","limit"]
  }
}

module.exports = ApiFeatures;
