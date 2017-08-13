#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "cJSON.h"


char* getJSONKeyValues(char *jsonString, char* key) {

	cJSON *root = cJSON_Parse(jsonString);

	int size = cJSON_GetArraySize(root);
	cJSON *elem;
	cJSON *name;
	int i;

	char *res;
	res = malloc(strlen(jsonString));

	for (i = 0; i < size; i++) {
		elem = cJSON_GetArrayItem(root, i);
		name = cJSON_GetObjectItem(elem, key);
		char* value = strcat(name->valuestring, "\n");
		strcat(res, value);
	}

	char *finalResult = res;
	free(res);

	return finalResult;

}
