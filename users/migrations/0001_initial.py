# Generated by Django 3.2.5 on 2021-09-06 06:48

import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('name', models.CharField(max_length=220)),
                ('description', models.CharField(max_length=220)),
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=60)),
                ('date', models.DateField()),
                ('venue', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=100)),
                ('designation', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=100)),
                ('address', models.CharField(max_length=30)),
                ('contactdetails', models.CharField(max_length=60)),
                ('yearofpassing', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='StudentPassword',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('studentid', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='University',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Student_mapper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('courseid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.course')),
                ('departmentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.department')),
                ('studentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.student')),
                ('universityid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.university')),
            ],
        ),
        migrations.CreateModel(
            name='Rollno_mapper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rollno', models.IntegerField()),
                ('studentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
        ),
        migrations.CreateModel(
            name='Hod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('phone', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=30)),
                ('id_hod', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.department')),
            ],
        ),
        migrations.CreateModel(
            name='Faculty_mapper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departmentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.department')),
                ('facultyid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.faculty')),
                ('universityid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.university')),
            ],
        ),
        migrations.CreateModel(
            name='Eventpoll',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('interested', models.BooleanField(default=True)),
                ('eventid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.event')),
                ('studentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
        ),
        migrations.CreateModel(
            name='Event_mapper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departmentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.department')),
                ('eventid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.event')),
            ],
        ),
        migrations.CreateModel(
            name='Department_mapper',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departmentid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.department')),
                ('hodid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.hod')),
                ('universityid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.university')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='departmentid',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.department'),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=400)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]