import sys

def writeURE(infile, sId, outfileopt, outfiletext):
  for line in infile:
    data = (line.split(','))
    responses = data[1:]

    for i in range(len(responses)):
      questionPos = i + 1
      if i < 6:
        outfileopt.write("INSERT INTO OptionResponses (eId, sId, questionPosition, optionPosition) VALUES (" + 
          str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')
      elif 5 < i < 11: 
        outfiletext.write("INSERT INTO TextResponses (eId, sId, questionPosition, answer) VALUES (" + 
          str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')
      else:
        outfileopt.write("INSERT INTO OptionResponses (eId, sId, questionPosition, optionPosition) VALUES (" + 
          str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')

def writeProf(infile, sId, outfileopt, outfiletext):
  for line in infile:
    data = (line.split(','))
    responses = data[1:]

    for i in range(len(responses)):
      questionPos = i + 1
      if 0 < i < 2:
        outfileopt.write("INSERT INTO OptionResponses (eId, sId, questionPosition, optionPosition) VALUES (" +
        str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')
      elif i == 2: 
        outfiletext.write("INSERT INTO TextResponses (eId, sId, questionPosition, answer) VALUES (" + 
        str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')
      else:
        outfileopt.write("INSERT INTO OptionResponses (eId, sId, questionPosition, optionPosition) VALUES (" + 
        str(data[0]) + ',' + str(sId) + ',' + str(questionPos) + ',' + str(responses[i]) + ');\n')

def main():
  argv = sys.argv

  input_file = argv[1]
  output_fileopt = 'Insert-Statements/OptionResponses-insert.sql'
  output_filetext = 'Insert-Statements/TextResponses-insert.sql'
  sId = argv[2]
  surveyType = argv[3]
  print(argv)

  infile = open(input_file, 'r') 
  outfileopt = open(output_fileopt , 'a') 
  outfiletext = open(output_filetext , 'a') 

  if surveyType == 'URE':
    writeURE(infile, sId, outfileopt, outfiletext)
  elif surveyType == 'Pro':
    writeProf(infile, sId, outfileopt, outfiletext)
  else:
    print('no survey type')

  infile.close()
  outfileopt.close()
  outfiletext.close()

if __name__=='__main__':
  main()