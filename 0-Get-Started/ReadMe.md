# Intergrate AI in Zoom App

Update Ngrok in the following files and areas:
- .env
- -Zoom apps Marketplace 

Notes: 
- Nav bar and components are set in Authorization.js, consider removing if needed, otherwise this will be the main source for adding components


Take note of query params

Launched external handler for 
'zoommtg://zoom.us/launch?action=zapps&wd=qLWT7yRgoG1U63ornaJuQKYvdOzEqvkuiTEFxD4its4WJuMzVahNh0m8GxQuB50LSjhlfbj5XySMISUCR9XXp1ekSH0YNObM5YuDdxxLcKKe7q2Cdg99yJu6EGOHKWlRZI4WukzQewyRByLUdjZhYhGtcYvVlrQdC6UWOtloF-mS2ii0A8RO5D5khO5IpxOkosUVFV2H3vk2zUECd9IKl-Gz1P0BgsbSy7sIi_KGD2V3e17eg3H9ILo93rvW0M2Kx_0Do2O6q59IqbWHzPNpU-I1ySL-oYApqs8OlA.NQ9b-ISoC3mknmKy&confid=dGlkPTAzMGJkOWFjMDA2NTRhM2I5MGViZjhlNTBjMTJlOTZi&browser=chrome'.

Add link to Google calendar OAuth:
https://marketplace.zoom.us/z/DDXZQUGsI05iJpW1mgAAXwIAANMJDIame8YrEFaUgNdugs7LUOjG4jmYLZTXfa5HbxfTgxmZ6sH8iGGdqc-H-xY87fUmw-Vx33OgY-zWCc_HtrmVCURelt_7vTkgNSwjYaurvq9IeKCADhKbCNqesN2mRxF09C9YQR4EQhe2211XlQ-gv5K3m9uXc4tlFBSH4k8OXdJ0u1o1Ott8PTCpOTCITeONmkgoAMYY0_h7ChEP4QNXlm1MyWSp5vlAGN6dZC5ptT5nW136CpF_nx7YHLUeYB65nxgnZeeIBXH_JfV-FFwrwjVafoFHSZwObmrvkZARTMezh9CjG4yjsvfDBNV5PKCAX2UFgzlhtmV-dAh3ZhVqY3G9Sw-aRLEe9QslLdt5Z0QORvy2g9fdZlrrkSZKLdf5sr0L1PCAIOcrrNMyDsle7IuhY1B5fmKCffjBiBhuXesJ9XWXjHpqd-hp3x_LlY14ScAtagKrzmHvotpxIMvlnjt5b-7IczYLlIeONoGoAEw-tkRFGhDYoc-vZk89g_TunQvRWPkqwrCkaC4csxro3vjJ94LulgCmKpBDXzH6HpFzk-aETQ355Tx9XLmV2bhtsQu51fB1wIHDn__Wyeg_IZhJjZiMa_WUE2fIJJI8Ncxot7joHWhbon_GTub2gO1rGKbED2b5CPxB1kLQO8nfuns1nAk2B3gvYfWWwywscL-sqPPihDMVD10wf7XmAYlzO0Y-9I5mFIpVoZCYTrhDSdYB4BoablPXxss5MF2Troo0bWGR8UJ_otDP8L03DWpCHoA_mPjMocHkj8YUimJoJc50rbmhNvuvAQjiK0XSzedZGchHEG7EkcU7JrZg

Access to your Google calendar Example: 

https://accounts.google.com/signin/oauth/consent?authuser=1&part=AJi8hAMgesjXbJOOZsjfhEZoBk0aeRl1NeHp29mgd78QC_AQAD2CBIhv4i2R4ap_hcItBWCD_royQijfFmibAN-BHpilJjUPyY8ojo2M8a_-EgcTyGUANH4NpXTogmAheHVph7Bb0E8jIBoWR8tVwGjJzJO49j2lA9Tm8c6a8K_BaR1TapyrIG8pT6NQJP6vR7bmaKDOaGxviZk1QS7X9XQCoUhlYkeuUn3hzvTfWx7jQiVrC-W_AJGjF1JbjmZsbnr8KsOBwWZ_ShmiQaOcd8jXg8H6ly7Ucyx1Xk0nqZzibUONLouiVCpd1y-rg2mCyCUK8VPmq25gVTfXIWEtNZ6JT2HCE6e7vrcaBnja4-bPvaGqBPdnE5v_-b6-37Q99DfG2Vnmlr0Jk4tsENEiu28NSRE7aw4KXzjV59gR4RF9c3wEiKYU0Dk7rm1ylt22dP85E-bi0w1NEkDi-B_RxQAJqDS9TTjNTpKDM2ur3WRmv1mL9DKVoJ0NJm4VmfGMOUhEGSRzn6ORsDzSzp2C5vAQiS_8GViV1NSJabCi7LX1CbMPZlQ8vM4fcRZWmFwPYrkBGknCGBm3Ujs0PTC9jR_vcd4NN9DH7wUF6fbUmvohQd6C_pvTffeIEN5hC5ylV5bUMJggqPeTHhiri680_69CDBDAO5Z0etFQ_qcMOVXIwBhOWAWyOPs&as=S1946635536%3A1697488487428739&client_id=1041662158336-st794le5tsmv9c43jbldqvbem4ad0c64.apps.googleusercontent.com&theme=glif&pli=1&rapt=AEjHL4PA87JMN_nMNXUeW_5J47yg8GwR0Ja_b35VqaXuYhWwSDZ0YP3jZAqSMDrDezbyRI1keoRQrerGPKjk0s9gtHUzF0c9yw

