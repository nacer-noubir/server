{{/* Define a function to generate the full name of the release */}}
{{- define "standardnotes.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name }}
{{- end -}}

{{/* Define a function to generate the release name */}}
{{- define "standardnotes.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end -}}