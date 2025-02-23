from PIL import Image
from os import listdir
from os.path import isfile, join

relativePath = "inputFiles\\"
outputPath = "outputFiles\\"

filePath = "C:\mainFiles\\nodejs\platBesiMurahFrontend\public\img\\" + relativePath
outputFilePath = "C:\mainFiles\\nodejs\platBesiMurahFrontend\public\img\\" + outputPath

def getBaseFileName(fullFileName):
    return fullFileName[:-4]

def getExtension(fullFileName):
    return fullFileName.split(".")[-1]

def compress(fileName):
    im = Image.open(filePath + fileName)
    im = im.convert('RGB')
    print(im.size)
    im.save(outputFilePath + getBaseFileName(fileName) + ".jpg", optimize=True, quality=80)  
fileNames = [f for f in listdir(filePath) if isfile(join(filePath, f))]
outputFileNames = [f for f in listdir(outputFilePath) if isfile(join(outputPath, f))]


for fileName in fileNames:
    if(getExtension(fileName)=="png"):
        compress(fileName) 

im = Image.open('public/img/bracket4.png')  