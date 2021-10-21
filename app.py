import pprint   #collection 내 단일 document 조회
import pymongo
from pymongo import MongoClient
#cluster connection 에서 api랑 연동하기! # 데이터는 collections에서 확인
import pandas as pd
import numpy as np
#머신라닝
from sklearn.feature_extraction.text import CountVectorizer
from scipy.sparse import csr_matrix
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, requests, jsonify
from flask_restx import Api,Resource, reqparse
#flask: node.js에서 보내는 데이터 처리할 api
import json

app = Flask(__name__)  # 플라스크 애플리케이션을 생성하는 코드
#__name__이라는 변수에는 모듈명이 담긴다. 즉, 이 파일이 실행되면 app.py라는 모듈이 실행되는 것이므로 __name__ 변수에는 "app" 라는 문자열이 담긴다.
api = Api(app)
app.config['DEBUG'] = True

@app.route('/flask',method=['GET'])
# , methods =['POST']
#@app.route는 특정 URL에 접속하면 바로 다음 줄에 있는 함수를 호출하는 플라스크의 데코레이터다.
#데코레이터(decorator)란 기존 함수를 변경하지 않고 추가 기능을 덧붙일 수 있도록 해주는 함수
def test():
    

        client = MongoClient("mongodb+srv://AIdb:Tu%40eme2YG%21E5p3%23@aicluster.kihtp.mongodb.net/AIdb?retryWrites=true&w=majority")  #암호화된 암호 쓰기!
        db = client.AIdb
        collection = db.products

        total_data = []
        for data in collection.find():
            total_data.append(data)

        df = pd.DataFrame(total_data)

    
        count_vector1 = CountVectorizer(ngram_range=(1,2))
        c_vector_type = count_vector1.fit_transform(df['type'].values.astype('U'))

        count_vector2 = CountVectorizer(ngram_range=(1,1))
        c_vector_country = count_vector2.fit_transform(df['country'].values.astype('U'))

        count_vector3 = CountVectorizer(ngram_range=(1,3))
        c_vector_keyword = count_vector3.fit_transform(df['keyword'].values.astype('U'))



        type_c_sim = cosine_similarity(c_vector_type, c_vector_type)
        country_c_sim = cosine_similarity(c_vector_country, c_vector_country)
        keyword_c_sim = cosine_similarity(c_vector_keyword, c_vector_keyword)

        c_sim = (type_c_sim*(1/3) + country_c_sim*(1/3) + keyword_c_sim*(1/3)).argsort()[:,::-1]

        def recommendation(df, item, top = 10):
            #특정 제품과 비슷한 제품을 추천하기 때문에 우선 특정 제품 정보를 뽑아낸다.
            target_product_index = df[df['item'] == item].index.values
            #코사인 유사도 중 비슷한 코사인 유사도를 가진 정보를 뽑아낸다.
    
            sim_index = c_sim[target_product_index, :top].reshape(-1)
 
            #본인을 제외
            sim_index = sim_index[sim_index != target_product_index]

            #data frame으로 만들고 vote_count로 정렬한 뒤 return
            result = df.iloc[sim_index]   #여기서는 정렬 필요없음: 하게된다면 money를 int로 바꾸기!
            return result



        return recommendation(df, item = "[프레시지] 돈사골 순대국").to_html()
        # result = json.dumps(result)
        #.map(str)
        #.to_json(orient = 'columns')
        #(orient = 'table')
        #dataframe으로 넘겨줘서 .to_html()을 통해 html에 띄운다.
        #장바구니 node.js에서 inputId를 받아온다.
        #10개의 결과값을 react.js로 보낸다.
if __name__ == '__main__' :
    app.run(port = 5000, debug = True)



#a simple route that will return a string back 
#when a 'get request' is sent from Node.js to the /flask endpoint. (node.js-> flask get request)










  