from scipy.spatial.distance import cosine
import numpy as np
import pandas as pd
import decimal

def get_similarity(df1, df2):
    joined = df1.set_index('vcId').join(df2.set_index('vcId')).dropna()
    joined = joined.apply(pd.to_numeric, downcast='float')
    return 1 - cosine(joined["realValue"], joined["jobProfileValue"])

def get_recommendations(df_toRecommend, df_ONETJPV, df_ONETJobs):
    df_toRecommend = pd.DataFrame(df_toRecommend)
    df_ONETJPV = pd.DataFrame(df_ONETJPV)
    df_ONETJobs = pd.DataFrame(df_ONETJobs)
    stem_job_codes = df_ONETJPV.jobId.unique()
    df_out = pd.DataFrame(columns = ['jobId', 'Similarity'])
    
    for job_code in stem_job_codes:
        df_out = pd.concat([df_out, pd.DataFrame({'jobId' : job_code, 'Similarity' : get_similarity(df_toRecommend, df_ONETJPV[df_ONETJPV['jobId'] == job_code])}, index=[0])], ignore_index = True)
    
    print(df_out.sort_values(by=['Similarity'], ascending=False).head().set_index('jobId').join(df_ONETJobs.set_index('jobId')).dropna().head())
    return df_out.sort_values(by=['Similarity'], ascending=False).head().set_index('jobId').join(df_ONETJobs.set_index('jobId')).dropna().to_json()