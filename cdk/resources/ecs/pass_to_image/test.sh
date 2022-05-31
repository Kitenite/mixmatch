
key='public/521ca434-fb84-4873-8488-4f5196e5768c/rawImage/rawImage.png'
userID=${key%/*/*}
userID=${userID#*/}
# echo ${userID}
python create-matches.py "${userID}"