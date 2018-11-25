cd lambda/custom
rm index.zip 
zip index.zip * -r -X
aws lambda update-function-code --function-name myAFLTriviaFunction --zip-file fileb://index.zip
