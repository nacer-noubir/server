#!/bin/sh
set -e

COMMAND=$1 && shift 1

case "$COMMAND" in
  'start-web' )
    exec node docker/entrypoint-server.js
    ;;

  'start-worker' )
    exec node docker/entrypoint-worker.js
    ;;

  'statistics' )
    exec node docker/entrypoint-statistics.js
    ;;

   * )
    echo "[Docker] Unknown command"
    ;;
esac

exec "$@"
