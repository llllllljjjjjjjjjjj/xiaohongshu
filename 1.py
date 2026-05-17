import requests
url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.xiaohongshu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Chromium";v="148", "Microsoft Edge";v="148", "Not/A)Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0',
    #'x-b3-traceid': '2d606ecba4f9ef4d',
    #'x-rap-param': 'ByQBBgAAAAEAAAAUAAAClPveGpwAACfZAAAAQAAAAAAAAAAAcTA3ZzU1fkL3kcYSc7a0eUNrZTSKygAAABD2XodbWGE+vFfNMGuu8UBGdi+ePdv2FMCKup8xB+JeNz9/vwBC4kzaoJSuDTSlc0ENIHsU7rmF3p1f3p04OdEOCbunsxRk+XdmOTMZxgFWwvP8CUg3ev4MDFt7+UHgqpQ3lzvhW18UzaoStaKLgI2RlGoitn99rJuY5AR+4cw8l8fhhzKmTs8szbx/yE7NFOnGdEWVHbI3B4q62Viq7AC1dIqGLt/uZCw83YUsOe1AlB36A2lYSU40yvpbMO7PqIsffem1+RRWD87HccWx9Hs3KZcyX1XuSLyPfO4YtURoQtWKJebqpMey2UNRBQCjU1Qp3slvN3v9dtpjSNnGpDOELZrGtQnEtJgWtGeRtz68/HiI+bgJ7L8zpN3uc8w7Ede+lf3V/0J3w+1kpewouoHLoo3iggTxVhvnBrPSIl81g9fgF3UoxY3yz8ciixNfeu/VrjVlAoskv/73V3fIRCgOAZB4/k+fnZuAXbQovOFjTW0x0B+ZQtrFT5sY8sRVatMVrT0ZOqpTf37wPsIeJ77zbRh0Ylc0aaK/GnzGqISCyzxo9HYKfjF1Y0dnRsRvKLI+r0RMRkQ9s/aZEN/ZFEEt4d929dBtWAT7Vl/Zs9+p1evxY6uiPijrzd+s7vNUXjNaTfL6Cw5DsaleYSS/bxF2bKszajSIvAUH1IT6RvY7udr0mTfVa6xDSfHOypWw9vHUJR555OOFcU+c030sEtXj36Wm6B0Lo73BpzC2uQKBudJZJ41ixRle8b1/AOrVXhfI30T99xQdbI/CBeJ7aeOS13goKlea6wneS/IOERIjzP2+rrvnrjDvR1xTDCwpNcmVS7IL3Uk5pwZFnS0FtLq6f7oyWzA3haByO++WMI/CsgAAAoY=',
    'x-s': 'XYS_2UQhPsHCH0c1PUhMHjIj2erjwjQhyoPTqBPT49pjHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQTJdPIPAZlg94aGLTl/nMG/0p0P9+onnTbzemk8BEOLF8Yc7QawepnJFTx2bSocLDUyfEj+7iF8riMy7Y0Lr+BLSStLgSI+eSFyD+V+FR+L/mmL08FqbzmppZEL9Ryzb41LfIAt9pPcDR6JFYnzpiA2Dr3/pGI8ePE8M8mPrkHaMY/+7YpznrU+pz+c9EIqMQCLDkcpnbLP9IUyrT/Jfznnfl0yLLIaSQQyAmOarEaLSz+G9kEcS+6P9u6ySQBaAYLPnMr+n+D2jHVHdWFH0ijJ9Qx8n+FHdF=',
    'x-s-common': '2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1PUhMHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjH9N0rlN0rjNsQh+aHCH0rE8eG9+/LhGA4Dq9kd+/LEJ0GFwBSIqnS62oq9wBEk80+dJAHEJg8x+/ZIPeZAPAWlw/WjNsQh+jHCHjHVHdW7H0ijHjIj2eWjwjQQPAYUaBzdq9k6qB4Q4fpA8b878FSet9RQzLlTcSiM8/+n4MYP8F8LagY/P9Ql4FpUzfpS2BcI8nT1GFbC/L88JdbFyrSiafp/8DMra7pFLDDAa7+8J7QgabmFz7Qjp0mcwp4fanD68p40+fp8qgzELLbILrDA+9p3JpH9LLI3+LSk+d+DJfpSL98lnLYl49IUqgcMc0mrcDShtMmozBD6qM8FyFSh8o+h4g4U+obFyLSi4nbQz/+SPFlnPrDApSzQcA4SPopFJeQmzBMA/o8Szb+NqM+c4ApQzg8Ayp8FaDRl4AYs4g4fLomD8pzBpFRQ2ezLanSM+Skc47Qc4gcMag8VGLlj87PAqgzhagYSqAbn4FYQy7pTanTQ2npx87+8NM4L89L78p+l4BL6ze4AzB+IygmS8Bp8qDzFaLP98Lzn4AQQzLEAL7bFJBEVL7pwyS8Fag868nTl4e+0n04ApfuF8FSbL7SQyrptLLQl4LShyBEl20YdanTQ8fRl49TQc7Qgz9cAq9zV/9pnLoqAag8m8/mf89pDzBY7aLpOqAbgtF8EqgzGanWA8/bDcnLAzDRApSm7/9pf/7+8qgcAagYLq94p+d+/4gqM/e4Nq98n494QPMQCa/+IzrQM4FECLo4lcSpBN7S+ad+D8/4Apdb7tFS3a9prPrbApDlacDS9+nphPBzS8rD3cDSe87+fLo4Hag8QzSbc4FYcpdzmagWM8/8M4o8Qy9RS+dp7+LSiP7+x4gqM/db7z9Rn47pQc7kLag8a4bbSpDboJsRAygbFzDSiLozQynpSngp7J9pgG9+IpLRAzo+34LSiLdSFLo472db7cLS38g+gqgzMqLSmqM8B+dPlanQPaLLIqA8S8o+kLoz0GMm7qDSead+LpdcAag8D8gYrt94Qy/8SnnuA8p4n4ApQ2e+APpm74LksnLRQyrSlag8tq7Y+89p3GaRSyDG9qMSc4bbQyLGlagYC+fbc4ezQc7kxaLL7qA8+2DMCGjRSpdp72LShqdkP4gqhGfzd8LzV87+DqgzGGM8FLDS3LsRQysTgJpmFpBQl4omQcA+AprD9q9Sl49q6LozjaLpLarQM4bmQPFSI49bQqLSk+d+g/BpA8e498/+c4UTw4gzNanTU2rS3J7+hLoc9anYw8nTInLbQcFMkGS4bzrSiqB4QyrkSySm7zaRl4rR6pdzBa/+P+DSiJ7+hGnzSyS87njR1nfEQcMqhPdpFPnpM4rEQP7QbanSjcDSk2dYQyBzS8oQSqAbBwBSyLo43ag808/Qc4FRUpd4VaLP68nDEa/pQyF4jG/DI8nzn4BlyLozIJMkc4bZ7z7YQyLM3aMm7JrSk8g+rPbS6anSV/dzn4MQQyUTItM8FJBQn4opQzLlLaL+LpFSewrRULoqEanS0yDSe4d+Lpdq6/M4LpDS9an+QcFbAnn46qA+l4UTQ4S+QanYiPrlTLB4Qc9MB89Mo8rSi8g+n/BRS+Sm7wLSba7+L4gz/aLpl+rSeadPIpd4dag8ILfQc4M+Q4d8ApBlPndbn4e8z4gzCaL+m8/mc4bQQ4DEA8fqFNFSbP7+88FbApSmFLrRxPo+8pd4rcdQwq7YM4e8QP78Apflw8gYM4BpQcFzCanTL4Sbl49EFNUTTagWM8n8n47QApnRSynkTnBQM4BQQypzcanTtqM+gngQQyLbSypmFPDSip0SQz/mSnLQ8JrSbqpmQyFzOqnR3GLSeafp82D8xagGhJrDAqn8Q4fRAyfIhcLYl4bQN4gzt8pSm8nTIJ7+fLozragG68p+dP9p3qgqhLp87/FSezDEIqg48cdpFcDkM4FLF4g4V/db7PpmA/d+kn/pSy/D6q9S8/9Ll4g4IanSP8FSiLA8QPMPEa/P78pG7+7+nGgQmqgbFJFSbqrEPpd47wrQd8/+c4rYQcFbA8BF9qM4SJpbQ2rRSLMmFwrRPpM4QPFRAngb74DS9Po+nLozGt7b7nDDAN7+rcLY7PdpFq7Qp87+8/nHAaLpSq9kn47zdLoc7qSp9qA+l4bq6pd4TGpmFnDS9n0zQyM+/GLcAq98y/9Llqg4aagYO8p8l4FT1Lo4jaemwqA+ULMS6qFDMLp43c9bc47D6qgzUagYoyDSht74QPFcIwrDAq9S6tFkQPM4Aa/+n87Qn4MmQPMQradp74rS3afL9nDlDJ7bF8DSi4nRUpd4oa/+dqMzTqr4Qyb4Da/+O8/mc4rkUqg4Scdk98p+xPo+DqgzttMmFGFShn0+tLo41anS6q9zDP9pfN9zS+dp7+rSeGFlQzLTSpDrFGDShPBp8qg46ag80zDSea7PI4gz7LrcFnfQM4oYdqgzta/+cc9pn4oSQ4DkALMq98/mc49QQyo8S+04caDDA8nprLFkSPbm7nDSkqdQQP9IhGMpDq98TadPI4g47anS9qAmx/fpnLo4D8p87Jdkn4BMQybzIa/PAq9zn4b8QyFSSa/+g8eYM4bSoG/YO/fQO8/r7GFlQ4DpHa7pFc7Sl4rMQyFkAzb+iOaHVHdWEH0iTP/W9weGEw/LA+jIj2erIH0iINsQhP/rjwjQ1J7QTGnIjNsQhP/HjwjHl+AqEPer7weHEP0PAwAr7+AcF+/cFP0cA+ALjKc==',
    'x-t': '1779018315816',
    'x-xray-traceid': 'cf1ae09c0ee1c66b31f0e86057d90176',
    'xy-direction': '55',
    'cookie': 'abRequestId=4222a77c-10b2-5f59-b50a-e01d52c92c8c; a1=19d66558c7dsjg559n648ipqioxw68nif3go29mvj50000338198; webId=13ed1adc9daa427ad356093927d6d34f; gid=yjfKK22jy8idyjfKK22YSqj6WfMVk22jIK4YkhV3UA3lCl28EKYI3J888qqYyjY8S0JSSDKi; xsecappid=xhs-pc-web; ets=1779012627065; x-rednote-datactry=CN; x-rednote-holderctry=CN; web_session=040069b70fffc05d6a7b42df3c384b20dad2ce; id_token=VjEAABG84PioycbL7XJa5/mmstmjUYh+EZgU2u3klMvRhsuYu/+NMkEVo/GGVg2QbYhXJrmqgZMOtFRxUQN/yCy3IDdGyEXxhYafapZ4r7bjqVoH0TpCOMF4p/Ey4uvYzTwIu2Qf; webBuild=6.11.1; loadts=1779017708756; unread={%22ub%22:%226a089bb2000000003703497d%22%2C%22ue%22:%226a068fdf00000000380233db%22%2C%22uc%22:29}; acw_tc=0ad597da17790180418641183e255987976a9fecb300a9c65e420af9dd5bc5; websectiga=2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3; sec_poison_id=826fc862-9f57-4909-a940-8b9181782eb0',

}
json_data = {
    'cursor_score': '',
    'num': 27,
    'refresh_type': 1,
    'note_index': 14,
    'unread_begin_note_id': '',
    'unread_end_note_id': '',
    'unread_note_count': 0,
    'category': 'homefeed.fashion_v3',
    'search_key': '',
    'need_num': 12,
    'image_formats': [
        'jpg',
        'webp',
        'avif',
    ],
    'need_filter_image': False,
}
response = requests.post(url, headers=headers, json=json_data)
print(response.text)
