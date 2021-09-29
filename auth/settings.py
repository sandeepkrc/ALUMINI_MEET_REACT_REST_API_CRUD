
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'mmj89(p1r%n*30&q(x3-anz*b5y66mxwms_ab+to9(ea_%%iic'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # ADDED
    'rest_framework', #FOR REST API
    'corsheaders', #FOR REACT ACCESS API
    'users',       #CUSTOM APP
    'rest_framework_simplejwt', #FOR JWT TOKEN 
    
    'drf_api_logger',  #FOR API LOGGER
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'drf_api_logger.middleware.api_logger_middleware.APILoggerMiddleware',

    'corsheaders.middleware.CorsMiddleware', #INTTTTT
]

ROOT_URLCONF = 'auth.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'auth.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dbuserauth',
        'USER':'root',
        'PASSWORD':'root',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

#Override the default user
AUTH_USER_MODEL = 'users.User'

# to get cookies from fromnt end use these
CORS_ORIGIN_ALLOW_ALL=True
CORS_ALLOW_CREDENTIALS=True

# jwt permission 

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

DRF_API_LOGGER_DATABASE = True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'psfns.rc@gmail.com'
EMAIL_HOST_PASSWORD = 'realcoderz'
EMAIL_USE_SSL =False



# INTTTTT
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
]




LOGGING = {
    'version' : 1,
    'disable_existing_loggers':False,

    'formatters':{
        'Simple_Format':{
            'format': '{levelname} {message}',
            'style': '{',
        }
    },

    'handlers': {
        'file': {
            'level':'DEBUG',
            'class':'logging.FileHandler',
            'filename':'./logs/log_file1.log',
            'formatter':'Simple_Format',
        },

        'console':{
            'level':'DEBUG',
            'class':'logging.StreamHandler',
        },
    },

    'loggers':{
        'django':{
            'handlers': ['file',],
            'level': 'DEBUG',
        },
    },

}


