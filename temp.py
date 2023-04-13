import sys
import random
import pickle
# import sklearn from pickle
import numpy as np
mymodel = pickle.load(open('model.pkl','rb'))

# height = int(sys.argv[1])
# base = int(sys.argv[2])
# ans = height*(random.randint(1,9))+base*(random.randint(0,9))
# output = ans.to_json()

temp1 = float(sys.argv[1])
temp2 = float(sys.argv[2])
temp3 = float(sys.argv[3])
temp4 = float(sys.argv[4])

ip = np.array([temp1,temp2,temp3,temp4]).reshape(1,4)
ans = mymodel.predict(ip)

print(ans[0])

sys.stdout.flush()

# print('hello world')