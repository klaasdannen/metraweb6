import os
from pathlib import Path

# get current dir
dir_path = os.path.dirname(os.path.realpath(__file__))


def getReadableFileSizeString(fileSizeInBytes):
    i = -1
    byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB']
        
    while (fileSizeInBytes > 1024):
        fileSizeInBytes = fileSizeInBytes / 1024;
        i=i+1

    return "{:.1f}".format(max(fileSizeInBytes, 0.1))+ byteUnits[i]

def process_pdf(filestr):
    size = os.path.getsize(filestr)
    size_str = getReadableFileSizeString(size)
    
    # extract product name and version string from filename
    try:
        path, filename = os.path.split(filestr)
        type, product_name, version = filename.split('_')
        version_str, ending = version.split('.')
        version_str = version_str[1:]
        version_str = version_str.replace('-', '.')
    except:
        print("Problem with file: " + filename)

    return product_name, size_str, version_str, filename

def process_firmware(filestr):
    size = os.path.getsize(filestr)
    size_str = getReadableFileSizeString(size)
    
    try: 
        # extract product name and version string from filename
        path, filename = os.path.split(filestr)
        part1, pt2 = filename.split('_on_')

        # get last 4 chars
        fullversion = part1[-4:]
        major_ver = fullversion[:2]
        minor_ver = fullversion[-2:]

        #build version string from those two
        version_str = str(major_ver) + '.' + str(minor_ver)
        #product_name is all except last 5 chars
        product_name = part1[:-5]
    except:
        print("Problem with file: " + filename)

    return product_name, size_str, version_str, filename

def process_software(filestr):
    size = os.path.getsize(filestr)
    size_str = getReadableFileSizeString(size)
    
    try:
        # extract product name and version string from filename
        path, filename = os.path.split(filestr)

        product_name, version = filename.split('_')
        version_str, ending = version.split('.')
        version_str = version_str[1:]
        version_str = version_str.replace('-', '.')
        
    except:
        print("Problem with file: " + filename)

    return product_name, size_str, version_str, filename

def write_markdown(filename, description_de, description_en ,version_str,file_size,source_file, filetype, asset_type):
    print('Creating file')
    with open(filename, 'w') as writer:
        writer.writelines('---\n')
        writer.writelines('filename_de: '+description_de+'\n')
        writer.writelines('filename_en: '+description_en+'\n')
        writer.writelines('filetype: '+filetype+'\n')
        writer.writelines('size: '+file_size+'\n')
        writer.writelines('version: '+version_str+'\n')
        writer.writelines('link: "'+asset_type+'/'+source_file+'"\n')
        writer.writelines('type: '+asset_type+'\n')
        writer.writelines('---\n')

    

# handle firmwares
print("Processing Firmwares")
pathlist = Path(dir_path+"/firmware").rglob('*.zip')
for path in pathlist:
    # because path is object not string
    path_in_str = str(path)
    
    product_name, file_size, version_str, source_file = process_firmware(path_in_str)

    filename = 'Fw_' + product_name.replace('-','').lower() + '.md'
    target_filename = (dir_path+'/../../_files/'+filename)

    if(not os.path.isfile(target_filename)):
        print("New Datasheet detected:")
        print(product_name)
        print(version_str)
        print(file_size)
        print(source_file)

        filetype = 'ZIP'
        asset_type = 'firmware'

        description_de = 'Firmware ' + product_name
        description_en = 'Firmware ' + product_name

        write_markdown(target_filename, description_de, description_en ,version_str,file_size,source_file, filetype, asset_type)
    else:
        print('File already known')

# handle Datasheets
print("Processing Dataheets")
pathlist = Path(dir_path+"/datasheet").rglob('*.pdf')
for path in pathlist:
    # because path is object not string
    path_in_str = str(path)
    product_name, file_size, version_str, source_file = process_pdf(path_in_str)
   
    filename = 'Ds_' + product_name.replace('-','').lower() + '.md'
    target_filename = (dir_path+'/../../_files/'+filename)

    #check if it already exists in _files dir
    if(not os.path.isfile(target_filename)):
        print("New Datasheet detected:")
        print(product_name)
        print(version_str)
        print(file_size)
        print(source_file)

        filetype = 'PDF'
        asset_type = 'datasheet'

        description_de = 'Datenblatt ' + product_name
        description_en = 'Datasheet ' + product_name

        write_markdown(target_filename, description_de, description_en ,version_str,file_size,source_file, filetype, asset_type)
    else:
        print('File already known')



# handle Documents
print("Processing Documents")
pathlist = Path(dir_path+"/document").rglob('*.pdf')
for path in pathlist:
    # because path is object not string
    path_in_str = str(path)

    product_name, file_size, version_str, source_file = process_pdf(path_in_str)
   
    filename = 'Doc_' + product_name.replace('-','').lower() + '.md'
    target_filename = (dir_path+'/../../_files/'+filename)

    #check if it already exists in _files dir
    if(not os.path.isfile(target_filename)):
        print("New Document detected:")
        print(product_name)
        print(version_str)
        print(file_size)
        print(source_file)

        filetype = 'PDF'
        asset_type = 'document'

        description_de = 'Anleitung ' + product_name
        description_en = 'Documentation ' + product_name

        write_markdown(target_filename, description_de, description_en ,version_str,file_size,source_file, filetype, asset_type)
    else:
        print('File already known')

   

# handle software
print("Processing Software")
pathlist = Path(dir_path+"/software").rglob('*.zip')
for path in pathlist:
    # because path is object not string
    path_in_str = str(path)

    product_name, file_size, version_str, source_file = process_software(path_in_str)
   
    filename = 'Sw_' + product_name.replace('-','').lower() + '.md'
    target_filename = (dir_path+'/../../_files/'+filename)

    if(not os.path.isfile(target_filename)):
        print("New Software detected:")
        print(product_name)
        print(version_str)
        print(file_size)
        print(source_file)

        filetype = 'ZIP'
        asset_type = 'software'

        description_de = product_name
        description_en = product_name

        write_markdown(target_filename, description_de, description_en ,version_str,file_size,source_file, filetype, asset_type)
    else:
        print('File already known')



# TODO
# Use FM parser to update existing files
# https://pypi.org/project/python-frontmatter/

# Remove leading zeros in version
# remove characters from version