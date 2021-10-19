import pprint   #collection 내 단일 document 조회
import pymongo
from pymongo import MongoClient
#cluster connection 에서 api랑 연동하기! # 데이터는 collections에서 확인
import pandas as pd
import numpy as np
import sys
import json


#머신러닝
from sklearn.feature_extraction.text import CountVectorizer
from scipy.sparse import csr_matrix
from sklearn.metrics.pairwise import cosine_similarity


client = MongoClient("mongodb+srv://AIdb:Tu%40eme2YG%21E5p3%23@aicluster.kihtp.mongodb.net/AIdb?retryWrites=true&w=majority")  #암호화된 암호 쓰기!
db = client.AIdb
collection = db.products

total_data = []
for data in collection.find():
    total_data.append(data)

df = pd.DataFrame(total_data)

#우선 type객체만 만들기
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



print(recommendation(df, item = sys.stdin.readlines()))
#장바구니 node.js에서 inputId를 받아온다.
#10개의 결과값을 react.js로 보낸다.















  